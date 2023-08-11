import { motion } from "framer-motion";
import { Container, Section } from "./index";
import * as clientLogos from "../img/clients/index";

const Clients = () => {
  const logoKeys = Object.keys(clientLogos);

  const clientLogoArray = logoKeys.map((key, index) => ({
    image: clientLogos[key],
    key: key,
    index: index,
  }));

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: customDelay,
      },
    }),
  };

  return (
    <Section className="clients">
      <Container className="py-8 pb-10">
        <p className="text-sm text-center text-gray-700 pb-6">
          Trusted by top-tier product companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-8">
          {clientLogoArray.map((logo) => (
            <motion.div
              key={logo.key}
              initial="hidden"
              animate="visible"
              variants={variants}
              custom={logo.index * 0.1}
            >
              <img src={logo.image} alt="Logo" className="h-[1.5rem]" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Clients;
