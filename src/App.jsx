import "./index.css";
import "../src/scss/main.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import GradientCta from "./components/GradientCta";
import Footer from "./components/Footer";

import gradientCtaImage from "../src/img/gradient-cta/gradient-cta.webp";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />

      <Hero
        title="Stay agile and oranigsed with"
        highlightedWord="Philadelphia"
        body="Boost productivity and collaboration with weekly sprints and progress tracking."
        image=""
        buttonText="Get Started"
        buttonHref="#"
      />

      <Clients />

      <GradientCta
        title="Effortlessly manage tasks and streamline workflows with Philadelphia"
        body="Philadelphia provides a powerful task management system designed to enhance team productivity and organisation."
        image={gradientCtaImage}
        hasIconButton
      />

      <Cards />

      <Footer />
    </>
  );
}

export default App;
