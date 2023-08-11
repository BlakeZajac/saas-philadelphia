import "./index.css";
import "../src/scss/main.scss";

import {
  Header,
  Hero,
  Clients,
  GradientCta,
  Cards,
  Features,
  Footer,
  Pricing,
  Blog,
} from "./components/index";

import gradientCtaImage from "../src/img/gradient-cta/gradient-cta.webp";

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

      <Features
        title="Empower your team's productivity with Philadelphia's robust task management and dynamic to-do list"
        body="Efficiently manage tasks and prioritise workloads while staying organised and on track with Philadelphia's oowerful task management and dynamic to-do list capabilities."
      />

      <Pricing />

      <Blog
        title="Insights, tips and strategies with Philadelphia"
        body="Discover new ways to streamline your workflow, enhance collaboration, and make the most of our powerful task management system."
      />

      <Footer />
    </>
  );
}

export default App;
