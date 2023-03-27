import React from "react";
import PropTypes from "prop-types";

const GenericInput = ({
    inputClass,
    inputID,
    inputLabel,
    inputPlaceholder,
    onChange,
    required,
    rows,
    maxLen,
}) => {
    return (
        <div className={"form-control " + inputClass}>
            <label htmlFor={inputID}>{inputLabel}</label>
            <textarea
                id={inputID}
                placeholder={inputPlaceholder || ""}
                onChange={onChange}
                required={required}
                rows={rows}
                maxLength={maxLen}               
            />
        </div>
    );
};

GenericInput.defaultProps = {
    inputClass: "",
    inputID: "task-name",
    inputLabel: "Task",
    inputPlaceholder: "Take out the trash",
    rows: 4,
    maxLen: 240,
};

GenericInput.propTypes = {
    inputClass: PropTypes.string,
    inputID: PropTypes.string,
    inputLabel: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    rows: PropTypes.number,
    maxLen: PropTypes.number,
};

export default GenericInput;
