import PropTypes from "prop-types";
import Container from "./Container";
import IconButton from "./IconButton";

const GradientCta = ({ title, body, image, hasIconButton }) => {
  return (
    <div className="gradient-cta">
      <Container className="lg:flex items-center gap-8 bg-gradient-linear-light rounded-xl p-16 md:pr-0 text-white">
        <div className="flex-1">
          <div className="flex flex-col gap-y-2 max-w-[600px]">
            {title && <h4>{title}</h4>}
            {body && <p>{body}</p>}

            {hasIconButton && (
              <div className="mt-8">
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
    </div>
  );
};

GradientCta.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  hasIconButton: PropTypes.bool,
};

export default GradientCta;
