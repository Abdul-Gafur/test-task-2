import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ type, text, onClick }) => {
  return (
    <button
      className="button"
      data-value={text}
      type={type}
      value={text}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
};

export { Button };
