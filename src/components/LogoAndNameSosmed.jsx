import PropTypes from "prop-types";

LogoSosmed.propTypes = {
  children: PropTypes.any,
  srcImg: PropTypes.string,
};
export function LogoSosmed({ children = "name", srcImg }) {
  return (
    <p className="flex items-center gap-2">
      <img src={srcImg} className="h-5 w-5" alt="" />
      <span>{children}</span>
    </p>
  );
}
