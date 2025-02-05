import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TextInput = ({
  label,
  placeholder = "",
  value,
  onChange,
  error = "",
  icon: Icon = null,
  type = "text",
  className = "",
}) => {
  const baseStyles =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const errorStyles = "border-red-500 focus:ring-red-500";
  const defaultStyles = "border-gray-300";

  const inputClasses = classNames(
    baseStyles,
    error ? errorStyles : defaultStyles,
    className
  );

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <Icon />
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={classNames(
            inputClasses,
            Icon && "pl-10" // Thêm padding khi có icon
          )}
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  icon: PropTypes.elementType, // Component icon
  type: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
