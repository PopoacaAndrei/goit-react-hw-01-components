import PropType from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span
        className={friend.isOnline ? css.statusOnline : css.statusOffline}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propType = {
  friends: PropType.shape({
    avatar: PropType.string.isRequired,
    name: PropType.string.isRequired,
    isOnline: PropType.bool.isRequired,
    id: PropType.number.isRequired,
  }),
};
