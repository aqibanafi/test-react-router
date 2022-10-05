import React from 'react';
import { Link } from 'react-router-dom';
const DisplayFriends = ({friends}) => {
    const {id, name, email, username} = friends;
    console.log(friends)
    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <p>User Name: <Link to={`/friends/${id}`}>{username}</Link></p>
        </div>
    );
};

export default DisplayFriends;