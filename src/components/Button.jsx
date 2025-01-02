import PropTypes from "prop-types";

Btn.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
export function Btn({ children, className }) {
  return (
    <button
      type="submit"
      className={`${className}  text-white px-5 transition-all active:ring-2 active:ring-offset-2 font-bold py-1 my-1`}
    >
      {children}
    </button>
  );
}
