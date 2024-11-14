import React from 'react';
import { NavLink } from "react-router-dom";

function Nav ({ onTopicClick}) {
    return (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/cats" onClick={() => onTopicClick('cats')}>Cats</NavLink></li>
            <li><NavLink to="/dogs" onClick={() => onTopicClick('dogs')} >Dogs</NavLink></li>
            <li><NavLink to="/computers" onClick={() => onTopicClick('computers')}>Computers</NavLink></li>
        </ul>
    </nav>
);
};

export default Nav;
