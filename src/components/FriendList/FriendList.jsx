import styles from './FriendList.module.css';
import { Friend } from './FriendListItem';

export default function FriendList(items) {
  return (
    <div className="container">
      <ul className={styles.friends}>
      {items.items.map(({ id, name, avatar, isOnline }) => (
        <Friend id={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
    </div>
  );
}
