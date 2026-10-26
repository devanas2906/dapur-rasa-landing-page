import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MenuSection from "./components/MenuSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import OrderingSection from "./components/OrderingSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <OrderingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
