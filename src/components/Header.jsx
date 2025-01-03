import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Header.propTypes = {
  className: PropTypes.string,
};
export function Header({ className }) {
  return (
    <section
      className={`w-full justify-between items-center text-white flex px-5 py-2 shadow-md sticky top-0 ${className} `}
    >
      <Link to="/">
        <img src="/left-arrow-alt-svgrepo-com.png" alt="" className="h-8 w-8" />
      </Link>

      <span>v1.0</span>
    </section>
  );
}
