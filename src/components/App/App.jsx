import Profile from "../Profile/Profile";
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionHistory/TransactionHistory'
import userData from "../../userData.json"
import friends from "../../friends.json"
import transactions from '../../transactions.json'
import './App.css'



export default function App () {
    return (
        <div className='container'>
        <Profile
           image={userData.avatar}
           name={userData.username}
           tag={userData.tag}
           location={userData.location}
           stats={userData.stats}
       />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
     </div>
     );
  };


