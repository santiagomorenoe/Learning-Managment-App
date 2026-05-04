import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="nondashboard-layout bg-inherit">
            <NonDashboardNavbar />
            <main className="nondashboard-layout__main bg-inherit">
                {children}
            </main>
            <Footer />
        </div>
    )
}