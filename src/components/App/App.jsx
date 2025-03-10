import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import userData from '../../data/userData.json';
import friends from "../../data/friends.json";
import transaction from "../../data/transaction.json";

export default function App() {
    return (
        <>
            <Profile 
                name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transaction} />
        </>
    );
};