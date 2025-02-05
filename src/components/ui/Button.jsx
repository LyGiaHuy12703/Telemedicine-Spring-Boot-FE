import PropTypes from "prop-types";
import classNames from "classnames";
const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  icon: Icon = null,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded focus:outline-none transition";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100",
  };

  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const buttonClasses = classNames(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && disabledStyles,
    className
  );
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      type="button"
      disabled={disabled}
    >
      {Icon && (
        <span className="mx-3">
          <Icon />
        </span>
      )}
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "outline"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
export default Button;
