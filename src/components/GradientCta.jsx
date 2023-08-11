import PropTypes from "prop-types";
import { Container, IconButton, Section } from "./index";

const GradientCta = ({ title, body, image, hasIconButton }) => {
  return (
    <Section className="gradient-cta">
      <Container className="lg:flex items-center gap-8 bg-gradient-linear-light rounded-xl px-8 py-12 lg:px-16 lg:pr-0 text-white">
        <div className="flex-1 pb-12 lg:pb-0">
          <div className="flex flex-col lg:gap-y-2 lg:max-w-[600px]">
            {title && <h4>{title}</h4>}
            {body && <p>{body}</p>}

            {hasIconButton && (
              <div className="mt-8 lg:mt-12">
                <IconButton />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <img
            src={image}
            alt=""
            className="rounded-xl lg:rounded-r-none lg:rounded-top-l-none"
          />
        </div>
      </Container>
    </Section>
  );
};

GradientCta.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  hasIconButton: PropTypes.bool,
};

export default GradientCta;
