import Course from "../models/courseModel.js";
export const listCourses = async (req, res) => {
    try {
        const { category } = req.query;
        const courses = category && category !== "all"
            ? await Course.scan("category").eq(category).exec()
            : await Course.scan().exec();
        res.json({ message: "Courses listed successfully", data: courses });
    }
    catch (error) {
        res.status(500).json({ message: "Error listing courses", error });
    }
};
export const getCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const course = await Course.get(courseId);
        if (!course) {
            res.status(404).json({ message: "Course not found" });
            return;
        }
        res.json({ message: "Course fetched successfully", data: course });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching course", error });
    }
};
//# sourceMappingURL=courseController.js.map