function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <span
        style={{
          width: "33.33%",
          height: "5%",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        }}
      >
        users
      </span>
      <span
        style={{
          width: "33.33%",
          height: "5%",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        }}
      >
        posts
      </span>
      <span
        style={{
          width: "33.33%",
          height: "5%",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        }}
      >
        comments
      </span>
    </div>
  );
}

export default App;
