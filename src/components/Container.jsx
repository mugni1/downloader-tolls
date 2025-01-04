import PropTypes from "prop-types";

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
export function Container({ children, className }) {
  return (
    <section className={`wfull min-h-screen flex items-center justify-center ${className}`}>
      {children}
    </section>
  );
}

Container2.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
export function Container2({ children, className }) {
  return (
    <section className={`${className} w-full min-h-screen pb-5`}>
      {children}
    </section>
  );
}
