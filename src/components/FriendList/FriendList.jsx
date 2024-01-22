import PropType from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendListItem key={item.id} friend={item} />
      ))}
    </ul>
  );
};

FriendList.PropType = {
  friends: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
    })
  ).isRequired,
};
