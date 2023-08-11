import PropTypes from "prop-types";
import { Section, Container, Button } from "./index";

const Subscribe = ({ title, body }) => {
  return (
    <Section id="subscribe">
      <Container className="bg-radial-gradient-dark flex flex-col gap-y-12 items-center justify-center rounded-3xl overflow-hidden p-8 md:p-16">
        <div className="text-center text-white max-w-[1000px] mx-auto">
          {title && <h2 className="pb-6">{title}</h2>}
          {body && <p className="md:text-lg">{body}</p>}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full max-w-[500px] mx-auto">
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-full px-4 py-3 bg-white/10 border border-white/20 placeholder:text-white/75 text-white hover:border-white/50 hover:placeholder:text-white transition"
          />

          <Button className="h-full top-0 right-0">Subscribe</Button>
        </div>
      </Container>
    </Section>
  );
};

Subscribe.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Subscribe;
