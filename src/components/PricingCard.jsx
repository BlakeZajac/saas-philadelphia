import PropTypes from "prop-types";
import Button from "./Button";

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
        {benefits && (
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}
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
