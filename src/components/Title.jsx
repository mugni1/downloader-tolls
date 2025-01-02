import PropTypes from "prop-types";

Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
export function Title({ children, className }) {
  return (
    <h1 className={`font-bold text-center text-white text-2xl ${className}`}>
      {children}
    </h1>
  );
}
