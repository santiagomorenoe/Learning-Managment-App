"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/ui/themes";
import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import { LogIn, LogOut, User } from "lucide-react";

const NonDashboardNavbar = () => {
    const { user } = useUser();
    const userRole = user?.publicMetadata?.userType as "student" | "teacher";

    return (
        <nav className="nondashboard-navbar">
            <div className="nondashboard-navbar__container">
                <div className="nondashboard-navbar__search">
                    <Link href="/" className="nondashboard-navbar__brand" scroll={false}>
                        Santi Education
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Link
                                href="/search"
                                className="nondashboard-navbar__search-input"
                                scroll={false}
                            >
                                <span className="hidden sm:inline">Search Courses</span>
                                <span className="sm:hidden">Search</span>
                            </Link>
                            <BookOpen
                                className="nondashboard-navbar__search-icon"
                                size={18}
                            />
                        </div>
                    </div>
                </div>
                <div className="nondashboard-navbar__actions">
                    <button className="nondashboard-navbar__notification-button">
                        <span className="nondashboard-navbar__notification-indicator"></span>
                        <Bell className="nondashboard-navbar__notification-icon" />
                    </button>
                    {
                        user ? (
                            <div className="flex items-center gap-2">
                                <UserButton
                                    appearance={{
                                        theme: shadesOfPurple,
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/signin"
                                    className="nondashboard-navbar__auth-button--login flex items-center gap-2"
                                >
                                    <LogIn className="w-4 h-4" />
                                    Login
                                </Link>
                                <Link
                                    href="/signup"
                                    className="nondashboard-navbar__auth-button--signup flex items-center gap-2"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Sign up
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        </nav>
    );
};

export default NonDashboardNavbar;