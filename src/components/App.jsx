import { Profile } from "./Profile/Profile";
import users from "../user.json";
import data from "../data.json";
import { Statistics } from "./Statistics/Statistics";
import friends from "../friends.json";
import { Friends } from "./FriendsList/FriendsList";
import transactions from "../transactions.json";
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
