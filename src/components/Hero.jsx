import PropTypes from "prop-types";
import Container from "./Container";
import Button from "./Button";

const Hero = ({
  title,
  highlightedWord,
  body,
  image,
  buttonText,
  buttonHref,
}) => {
  return (
    <div className="hero mt-4">
      <Container className="bg-radial-gradient-dark flex flex-col items-center justify-center rounded-3xl overflow-hidden p-12">
        <div className="hero__content text-center text-white pb-8 max-w-[1000px]">
          {title && (
            <h1 className="hero__title pb-6 sm:pb-8 text-[2.5rem] sm:text-[3.875rem] lg:text-[5.8125rem]">
              {title}{" "}
              <span className="color-gradient-radial-light">
                {highlightedWord}
              </span>
            </h1>
          )}

          {body && <p className="hero__body sm:text-lg">{body}</p>}
        </div>

        {image && (
          <div className="hero__image-wrapper">
            <img src={image} alt="" className="hero__image" />
          </div>
        )}

        {buttonText && <Button href={buttonHref}>{buttonText}</Button>}
      </Container>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  highlightedWord: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
};

export default Hero;
