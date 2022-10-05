import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='home'>Home</Link>
            <Link to='products'>Products</Link>
            <Link to='corporate'>Corporate</Link>
            <Link to='friends'>Friends</Link>
        </div>
    );
};

export default Header;