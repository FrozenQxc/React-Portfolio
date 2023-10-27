import { React, useState } from "react";
import api from "../API";
import SearchStatus from "./SearchStatus/SearchStatus";
import Users from "./Users/Users";

export const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll);

    const handleDelete = (userId) => {
        setUsers(users.filter((e) => e._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </div>
    );
};

export default App;
