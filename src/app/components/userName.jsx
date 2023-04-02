import React from "react";
import { Link } from "react-router-dom";

const UserName = ({ ...rest }) => {
    const userName = rest.user.name;
    const linkUserId = `users/${rest.user._id}`;
    return <Link to={linkUserId}>{userName}</Link>;
};

export default UserName;
