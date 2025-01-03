import PropTypes from "prop-types";

Input.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
  className: PropTypes.string,
};

export function Input({ value = null, setValue = () => {}, className }) {
  return (
    <input
      className={` ${className} w-full py-1 px-3 mb-2 rounded-full outline-offset-1 text-slate-800`}
      type="text"
      placeholder="Tempel Link disini"
      value={value}
      onChange={setValue}
      required
    />
  );
}
