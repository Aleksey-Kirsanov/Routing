import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api/fake.api/user.api";
import QualitiesList from "./qualitiesList";

const UserPage = ({ match }) => {
    const userId = match.params.userId;
    const [user, setuser] = useState();
    useEffect(() => {
        api.getById(userId).then((user) => setuser(user));
    }, []);

    if (user) {
        return (
            <div>
                <h1> {user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>Встретился, раз: {user.completedMeetings}</p>
                <h2>Оценка: {user.rate}</h2>
                <button type="button" className="btn btn-outline-secondary">
                    <Link className="list-group-item active" to="/users">
                        {" "}
                        Все Пользователи{" "}
                    </Link>
                </button>
            </div>
        );
    }
    return "loading...";
};
UserPage.propTypes = {
    match: PropTypes.object.isRequired
};
export default UserPage;
