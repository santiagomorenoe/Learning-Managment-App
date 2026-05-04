import Header from "@/components/Header";
import { UserProfile } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/ui/themes";

const UserProfilePage = () => {
    return (
        <>
            <Header title="Profile" subtitle="View your profile" />
            <UserProfile
                path="/user/profile"
                routing="path"
                appearance={{
                    theme: shadesOfPurple,
                    elements: {
                        scrollBox: "bg-customgreys-darkGrey",
                        navbar: {
                            "& > div:nth-child(1)": {
                                background: "none",
                            },
                        },
                    },
                }}
            />
        </>
    );
};

export default UserProfilePage;