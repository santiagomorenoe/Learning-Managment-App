import type { Request, Response } from "express";

export const checkHealthy = async (req: Request, res: Response): Promise<void> => {
    try {
        const { isHealthy } = req.query;
    } catch (error: any) {
        res.status(500).json({ message: "backend isn't connected" })
    }
}