//Seo
import Heads from "Utilis/Heads";

// Sections
import Header from "Section/Header";
import Hero from "Section/Hero";
import About from "Section/About";
import Portfolio from "Section/Portfolio";
import Client from "Section/Client";
import Footer from "Section/Footer";

const index = () => {
  return (
    <>
      <Heads />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Client />
      <Footer />
    </>
  );
};
export default index;