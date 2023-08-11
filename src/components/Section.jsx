import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Section = ({ children, className, id, elementType }) => {
  const Element = elementType || "div";

  return (
    <Element id={id} className={twMerge("section", className)}>
      {children}
    </Element>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  elementType: PropTypes.string,
};

export default Section;
