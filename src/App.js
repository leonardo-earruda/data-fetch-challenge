import React, { useState } from "react";

function App() {
  const API_URL = `https://jsonplaceholder.typicode.com/`;
  const [data, setData] = useState([]);
  const [reqType, setReqType] = useState("users");

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_URL}${reqType}`);
      const data = await response.json();
      setData(data);
    } catch {}
  };

  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{
          hover: "",
          width: "33.33%",
          height: "5%",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        }}
      >
        users
      </button>
      <button
        style={{
          width: "33.33%",
          height: "5%",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        }}
      >
        posts
      </button>
      <button
        style={{
          width: "33.33%",
          height: "5%",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        }}
      >
        comments
      </button>
      {data.length > 1 && (
        <ul>
          {data.map((item) => (
            <li>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}

      {posts.length > 1 && (
        <ul>
          {posts.map((item) => (
            <li>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}

      {comments.length > 1 && (
        <ul>
          {comments.map((item) => (
            <li>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
