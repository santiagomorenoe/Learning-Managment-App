"use client";

import { SignUp, useUser } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/ui/themes";
import { useSearchParams } from "next/navigation";

const SignUpComponent = () => {
    const { user } = useUser();
    const searchParams = useSearchParams();
    const isCheckoutPage = searchParams.get("showSignUp") !== null;
    const courseId = searchParams.get("id");

    const signInUrl = isCheckoutPage
        ? `/checkout?step=1&id=${courseId}&showSignUp=false`
        : "/signin";

    const getRedirectUrl = () => {
        if (isCheckoutPage) {
            return `/checkout?step=2&id=${courseId}&showSignUp=false`;
        }

        const userType = user?.publicMetadata?.userType as string;
        if (userType === "teacher") {
            return "/teacher/courses";
        }
        return "/user/courses";
    };

    return (
        <SignUp
            appearance={{
                theme: shadesOfPurple,
                elements: {
                    rootBox: "flex justify-center items-center py-5",
                    cardBox: "shadow-none",
                    card: "bg-customgreys-secondarybg w-full shadow-none",
                    footer: {
                        background: "#25262F",
                        padding: "0rem 2.5rem",
                        "& > div > div:nth-child(1)": {
                            background: "#25262F",
                        },
                        text: "text-white-100",
                        link: "text-primary-750 hover:text-primary-600",
                        iconButton: "text-white-100",
                        iconButtonIcon: "text-white-100",
                        iconButtonText: "text-white-100",
                    },
                    formFieldLabel: "text-white-100 font-normal",
                    formButtonPrimary:
                        "bg-primary-700 text-white-100 hover:bg-primary-600 !shadow-none",
                    formFieldInput: "bg-customgreys-primarybg text-white-100 !shadow-none",
                    footerActionLink: "text-primary-750 hover:text-primary-600",
                    socialButtonsBlockButton: " bg-primary text-white-100 hover:text-primary-600",
                    actionButtonPrimary: "bg-primary-700 text-white-100 hover:bg-primary-600 !shadow-none",
                },
            }}
            signInUrl={signInUrl}
            forceRedirectUrl={getRedirectUrl()}
            routing="hash"
            afterSignOutUrl="/"
        />
    );
};

export default SignUpComponent;