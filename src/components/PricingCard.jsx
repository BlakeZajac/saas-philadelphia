import PropTypes from "prop-types";
import Button from "./Button";
import { AiFillCheckCircle } from "react-icons/ai";

const PricingCard = ({ isFeatured, title, price, description, benefits }) => {
  return (
    <div className={`${isFeatured ? "bg-gradient" : "bg-white"}`}>
      <div>
        {title && <p>{title}</p>}
        {price && <p>{price}</p>}
        {description && <p>{description}</p>}
      </div>

      <div>
        <Button href="#" className="w-full">
          Get started
        </Button>
      </div>

      <div>
        {benefits &&
          benefits.map((benefit, index) => (
            <div key={index} className="flex gap-x-2">
              <AiFillCheckCircle
                className={`${isFeatured ? "text-white" : "text-black"}`}
                size={20}
              />

              <p>{benefit}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  isFeatured: PropTypes.bool,
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  benefits: PropTypes.arrayOf(PropTypes.string),
};

export default PricingCard;
