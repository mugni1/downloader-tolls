import PropTypes from "prop-types";

Footer.propTypes = {
  children: PropTypes.any,
};
export function Footer() {
  return (
    <footer className="w-full py-5 bg-slate-700 text-white">
      <div className="container px-5">
        <h1 className="text-lg text-center">Made with ❤️ by Mugni</h1>
        <h1 className="text-lg text-center">Thanks for Feri</h1>
      </div>
    </footer>
  );
}
