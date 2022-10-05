import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayFriends from '../DisplayFriends/DisplayFriends';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends)
    return (
        <div>
           {
            friends.map(friend => <DisplayFriends key={friend.id} friends={friend}></DisplayFriends>)
           }
        </div>
    );
};

export default Friends;