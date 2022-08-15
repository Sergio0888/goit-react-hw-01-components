import PropTypes from "prop-types";
import css from "./FriendsList.module.css";
import { FriendsListItem } from "./FriendListItem"

export const Friends = ({friends}) => {

    return (
        <ul className={css.list}>
            {friends.map(({avatar, name, isOnline, id}) => {
               return (
                <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
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