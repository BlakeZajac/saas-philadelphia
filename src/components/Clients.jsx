import Container from "./Container";
import * as clientLogos from "../img/clients/index";

const Clients = () => {
  const logoKeys = Object.keys(clientLogos);

  const clientLogoArray = logoKeys.map((key) => ({
    image: clientLogos[key],
    key: key,
  }));

  return (
    <div className="clients">
      <Container className="py-8">
        <p className="text-sm text-center pb-6">
          Trusted by top-tier product companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-8">
          {clientLogoArray.map((logo) => (
            <div key={logo.key}>
              <img src={logo.image} alt="Logo" className="h-[1.5rem]" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Clients;
