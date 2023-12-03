import PropTypes from "prop-types";
import { React } from "react";

const GroupList = ({ item }) => {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">{item.name}</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    );
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default GroupList;
