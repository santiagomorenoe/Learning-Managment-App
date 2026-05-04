export const checkHealthy = async (req, res) => {
    try {
        const { isHealthy } = req.query;
    }
    catch (error) {
        res.status(500).json({ message: "backend isn't connected" });
    }
};
//# sourceMappingURL=checkHealhy.js.map