import Profile from '../Profile/Profile';
import {Statistics} from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TrHistory from '../TransactionHistory/TransactionHistory';

import data from '../../folderJson/data.json';
import user from '../../folderJson/user.json';
import friends from '../../folderJson/friends.json';
import transaction from '../../folderJson/transactions.json';

export const App = () => {
  return (
    
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TrHistory items={transaction} />
    </div>
   
  );
};
