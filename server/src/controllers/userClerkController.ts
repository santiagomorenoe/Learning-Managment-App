import type { Request, Response } from "express";
import { clerkClient } from "../config/clerkClient.js";

export const updateUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId } = req.params;
    const userData = req.body;
    try {
        const user = await clerkClient.users.updateUserMetadata(userId as string, {
            publicMetadata: {
                userType: userData.publicMetadata.userType,
                settings: userData.publicMetadata.settings,
            },
        });

        res.json({ message: "User updated successfully", data: user });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};