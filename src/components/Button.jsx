import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick, classList }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className={"btn " + (classList || "")}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: "steelblue",
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    classList: PropTypes.string,
};

export default Button;
