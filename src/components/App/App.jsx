import React from "react";
import Profile from "../Profile/Profile"
import userData from "../Profile/userData.json"
import FriendList from "../FriendList/FriendList";
import friends from "../FriendList/friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../TransactionHistory/transactions.json";

const user = JSON.parse(JSON.stringify(userData));
const friend = JSON.parse(JSON.stringify(friends));
const transaction = JSON.parse(JSON.stringify(transactions))

function App() {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friend} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
