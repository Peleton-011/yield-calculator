import React from "react";
import PropTypes from "prop-types";

const GenericInput = ({
    inputClass,
    inputID,
    inputLabel,
    inputType,
    inputPlaceholder,
    onChange,
    required,
    checked,
}) => {
    return (
        <div className={"form-control " + inputClass}>
            <label htmlFor={inputID}>{inputLabel}</label>
            <input
                id={inputID}
                type={inputType}
                placeholder={inputPlaceholder || ""}
                onChange={onChange}
                required={required}
                checked={checked}                
            />
        </div>
    );
};

GenericInput.defaultProps = {
    inputClass: "",
    inputID: "task-name",
    inputLabel: "Task",
    inputType: "text",
    inputPlaceholder: "Take out the trash",
};

GenericInput.propTypes = {
    inputClass: PropTypes.string,
    inputID: PropTypes.string,
    inputLabel: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    checked: PropTypes.bool,
};

export default GenericInput;
