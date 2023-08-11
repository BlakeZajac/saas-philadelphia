import PropTypes from "prop-types";
import Button from "./Button";
import { AiFillCheckCircle } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const PricingCard = ({
  isFeatured,
  title,
  price,
  description,
  benefits,
  className,
}) => {
  const priceClasses = "text-4xl font-medium pb-6";

  return (
    <div
      className={twMerge(
        "flex flex-col gap-y-6 rounded-3xl p-6 md:p-8 xl:p-10 lg:min-h-[500px]",
        isFeatured
          ? "bg-gradient-linear-light text-white lg:top-[-1rem]"
          : "bg-white",
        className
      )}
    >
      <div className={`${isFeatured ? "text-white" : "text-black"}`}>
        {title && <h5>{title}</h5>}
        {price === "$0" ? (
          <p className={priceClasses}>{price}</p>
        ) : (
          <p className={priceClasses}>
            {price} <span className="text-2xl top-[-2px]">/mo</span>
          </p>
        )}

        {description && <p>{description}</p>}
      </div>

      <Button
        href="#"
        className={`${
          isFeatured ? "bg-white text-blue hover:bg-blue hover:text-white" : ""
        } w-full`}
      >
        Get Started
      </Button>

      <div>
        {benefits &&
          benefits.map((benefit, index) => (
            <div key={index} className="flex gap-x-2 pb-3">
              <AiFillCheckCircle
                className={`${
                  isFeatured ? "text-white" : "text-black"
                } min-w-[18px] min-h-[18px] top-[3px]`}
                size={18}
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
  className: PropTypes.string,
};

export default PricingCard;
