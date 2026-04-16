import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=Apple&from=2026-03-23&sortBy=popularity&apiKey=API_KEY")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
