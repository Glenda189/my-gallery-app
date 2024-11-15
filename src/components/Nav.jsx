import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"

{/*received the prop onTopicClick when one of the links below is clicked*/}
function Nav ({ onTopicClick}) {
    return (
    <nav className="main-nav">
        <ul>
{/*onclick event handler calls on ontopicclick when button is clicks and fetches picture of topic*/}
            <li><NavLink to="/cats" onClick={() => onTopicClick('cats')}>Cats</NavLink></li>
            <li><NavLink to="/dogs" onClick={() => onTopicClick('dogs')} >Dogs</NavLink></li>
            <li><NavLink to="/computers" onClick={() => onTopicClick('computers')}>Computers</NavLink></li>
        </ul>
    </nav>
);
}
Nav.propTypes= {
    onTopicClick: PropTypes.func.isRequired,
};

export default Nav;
