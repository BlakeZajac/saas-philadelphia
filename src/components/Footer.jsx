import { Section, Container } from "./index";
import logo from "../img/brand/logo-white.svg";

const Footer = () => {
  return (
    <Section
      elementType="footer"
      className="footer bg-black mt-12 rounded-t-3xl"
    >
      <Container className="py-8">
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between text-white">
          <img src={logo} alt="Logo" className="h-[24px]" />

          <p className="text-sm text-white/70">
            Developed by{" "}
            <a
              href="https://github.com/BlakeZajac"
              target="_blank"
              rel="noreferrer"
              className="border-b pb-1 hover:border-b-white/40 transition"
            >
              Blake Zajac
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
