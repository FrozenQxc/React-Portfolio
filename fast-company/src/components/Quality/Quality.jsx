import PropTypes from "prop-types";
import React from "react";

const Quality = ({ name, color }) => {
    return <span className={"badge m-1 bg-" + color}>{name}</span>;
};

Quality.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Quality;
