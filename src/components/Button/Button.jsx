import "./Button.css"
import PropTypes from "prop-types"

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default function Button({ text, className = "", type = "button", disabled = false, onClick = () => {} }) {
  return (
    <button
      type={type}
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
