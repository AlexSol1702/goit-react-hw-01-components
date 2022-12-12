import PropTypes from 'prop-types';

import styles from './FriendList.module.css';
import clsx from 'clsx';

export const Friend = ({ id, name, avatar, isOnline }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={clsx(styles.status, isOnline && styles.online)}></span>

      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
Friend.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
