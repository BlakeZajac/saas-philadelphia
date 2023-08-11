import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Container, IconButton, Section } from "./index";

const GradientCta = ({ title, body, image, hasIconButton }) => {
  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Section className="gradient-cta">
      <Container className="lg:flex items-center gap-8 bg-gradient-linear-light rounded-xl px-8 py-12 lg:px-16 lg:pr-0 text-white">
        <motion.div
          className="flex-1 pb-12 lg:pb-0"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <motion.div
            className="flex flex-col lg:gap-y-2 lg:max-w-[600px]"
            variants={variants}
          >
            {title && <h4>{title}</h4>}
            {body && <p>{body}</p>}

            {hasIconButton && (
              <motion.div
                className="mt-8 lg:mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                <IconButton />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        >
          <img
            src={image}
            alt=""
            className="rounded-xl lg:rounded-r-none lg:rounded-top-l-none"
          />
        </motion.div>
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
