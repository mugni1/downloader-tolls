import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Header.propTypes = {
  className: PropTypes.string,
};
export function Header({ className }) {
  return (
    <section
      className={`w-full flex px-5 py-2 shadow-md sticky top-0 ${className} `}
    >
      <Link to="/">
        <img
          src="/src/assets/left-arrow-alt-svgrepo-com.svg"
          alt=""
          className="h-8 w-8"
        />
      </Link>
    </section>
  );
}
