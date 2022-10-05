import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, email} = friend
    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>Email: {email}</h3>
        </div>
    );
};

export default FriendDetails;