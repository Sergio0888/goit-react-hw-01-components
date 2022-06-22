import PropTypes from "prop-types";
import css from "./FriendsList.module.css"

export const Friends = ({friends}) => {
    
    return (
    <ul className={css.list}>
        {friends.map(({avatar, name, isOnline, id}) => {
           return (
            <li className={css.item} key={id}>
            <span className={css.status} style={{background: isOnline? 'green': 'red'}}></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
        )
        })}
    </ul>
    );
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
};