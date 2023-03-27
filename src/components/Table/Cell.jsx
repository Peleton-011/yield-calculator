import React from "react";

const Cell = ({ colspan, rowspan, content }) => {
    return <td colSpan={colspan} rowSpan={rowspan}>{content}</td>;
};

export default Cell;
