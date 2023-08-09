import "./index.css";
import "../src/scss/main.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

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
      <Footer />
    </>
  );
}

export default App;
