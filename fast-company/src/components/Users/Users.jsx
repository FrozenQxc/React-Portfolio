import PropTypes from "prop-types";
import { React, useState } from "react";
import api from "../../API";
import { paginate } from "../../utils/paginate";
import User from "../User/User";
import GroupList from "./../GroupList/GroupList";
import Pagination from "./../Pagination/Pagination";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 3;

    const [professions] = useState(api.professions.fetchAll());

    console.log(professions);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <div>
            <GroupList item={professions} />
            {users.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array
};
export default Users;
