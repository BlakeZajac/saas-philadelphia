import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Section = ({ children, className, id }) => {
  return (
    <div id={id} className={twMerge("section", className)}>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
