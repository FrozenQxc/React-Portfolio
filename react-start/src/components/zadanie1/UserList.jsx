import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getUserPost = (userId) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        const userPost = response.data.find((post) => post.userId === userId);
        console.log(userPost);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={() => getUserPost(user.id)}>Get user post</button>
        </div>
      ))}
    </div>
  );
}

export default App;
