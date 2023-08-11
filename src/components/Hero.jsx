import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Button, Container, Section } from "./index";

const Hero = ({
  title,
  highlightedWord,
  body,
  image,
  buttonText,
  buttonHref,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: customDelay,
      },
    }),
  };

  return (
    <Section className="hero mt-4">
      <Container className="bg-radial-gradient-dark flex flex-col items-center justify-center rounded-3xl overflow-hidden p-8 md:p-16">
        <motion.div
          className="hero__content text-center text-white pb-8 max-w-[1000px]"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {title && (
            <motion.h1
              className="hero__title pb-6 sm:pb-8 text-[2.5rem] sm:text-[3.875rem] lg:text-[5.8125rem]"
              custom={0}
              variants={variants}
            >
              {title}{" "}
              <span className="color-gradient-radial-light">
                {highlightedWord}
              </span>
            </motion.h1>
          )}

          {body && (
            <motion.p
              className="hero__body sm:text-lg"
              custom={0.2}
              variants={variants}
            >
              {body}
            </motion.p>
          )}
        </motion.div>

        {image && (
          <motion.div
            className="hero__image-wrapper"
            initial="hidden"
            animate="visible"
            variants={variants}
            custom={0.4}
          >
            <img src={image} alt="" className="hero__image" />
          </motion.div>
        )}

        {buttonText && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            custom={0.6}
          >
            <Button href={buttonHref}>{buttonText} </Button>
          </motion.div>
        )}
      </Container>
    </Section>
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
