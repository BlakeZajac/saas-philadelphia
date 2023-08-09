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
      <Container className="bg-radial-gradient-dark flex flex-col items-center justify-center rounded-3xl bg-black overflow-hidden p-12">
        <div className="hero__content text-center text-white pb-8">
          {title && (
            <h1 className="hero__title pb-8">
              {title} <span className="color-gradient">{highlightedWord}</span>
            </h1>
          )}

          {body && <p className="hero__body text-lg">{body}</p>}
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
