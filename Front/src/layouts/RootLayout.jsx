import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PromoHeader from "../components/PromoHeader";

function RootLayout() {
    return (
        <>
            <PromoHeader />
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;