import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />; //render AuthPage if user doesn't exist
  } else {
    return <ChatsPage user={user} />; // go to Chat page if user in our database
  }
}

export default App;
