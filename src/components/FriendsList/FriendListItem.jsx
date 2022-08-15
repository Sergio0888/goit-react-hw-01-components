import PropTypes from "prop-types";
import css from "./FriendsList.module.css";

export const FriendsListItem = ({avatar, name, isOnline}) => {
        return (
         <li className={css.item}>
            <span className={css.status} style={{background: isOnline? 'green': 'red'}}></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
     )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};