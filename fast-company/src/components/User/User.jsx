import PropTypes from "prop-types";
import { React } from "react";
import Quality from "../Quality/Quality";
import Bookmark from "./../Bookmark/Bookmark";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    {qualities.map((qual) => (
                        <Quality key={qual._id} {...qual} />
                    ))}
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate} /5</td>
                <td>
                    <Bookmark
                        status={bookmark}
                        onClick={() => onToggleBookMark(_id)}
                    />
                </td>
                <td>
                    <button
                        onClick={() => onDelete(_id)}
                        className="btn btn-danger"
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool,
    onToggleBookMark: PropTypes.func.isRequired
};

export default User;
