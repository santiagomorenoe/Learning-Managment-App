import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dynamoose from "dynamoose";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import courseRoutes from "./routes/courseRoutes.js";
import userClerkRoutes from "./routes/userClerkRoutes.js";
import { requireAuth } from "@clerk/express";
import transactionRoutes from "./routes/transactionRoutes.js";

/* ROUTE IMPORTS */
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
    const localEndpoint = process.env.DYNAMODB_LOCAL_ENDPOINT || "http://localhost:8002";
    const localDDB = new DynamoDB({
        region: "us-east-2",
        endpoint: localEndpoint,
        credentials: {
            accessKeyId: "dummyKey123",
            secretAccessKey: "dummyKey123",
        },
    });
    dynamoose.aws.ddb.set(localDDB);
}

// Middleware
const app = express();
app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/courses", courseRoutes);
app.use("/users/clerk", requireAuth(), userClerkRoutes);
app.use("/transactions", requireAuth(), transactionRoutes);

/* SERVER */
const PORT = process.env.PORT || 3000;
if (!isProduction) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
