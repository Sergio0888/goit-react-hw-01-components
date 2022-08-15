import { Profile } from "./Profile/Profile";
import users from "../data/user.json";
import data from "../data/data.json";
import { Statistics } from "./Statistics/Statistics";
import friends from "../data/friends.json";
import { Friends } from "./FriendsList/FriendsList";
import transactions from "../data/transactions.json";
import { TransactionHistory } from "./Transaction/Transaction";



export const App = () => {
  const {username, tag, location, avatar, stats} = users;
  
  return (
    <div>
    <Profile
    username = {username}
    tag = {tag}
    location = {location}
    avatar = {avatar}
    stats = {stats}
     />

    <Statistics stats={data} />
    <Friends friends={friends} />;
    <TransactionHistory items={transactions} />;
     </div>
  );
};
