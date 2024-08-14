import ContactPage from "../components/ContactPage";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Testimonials from "../components/Testimonials";
import Workflow from "../components/Workflow";

export default function HomePage() {
    return (
        <div className="bg-[#000]">
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <Sponsors />
                {/* <Pricing /> */}
                <Testimonials />
                <ContactPage />
                <Footer />
            </div>
        </div>
    )

}