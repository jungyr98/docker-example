import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/hello`)
      .then((res) => setMsg(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1>{msg || "Loading..."}</h1>
    </div>
  );
}

export default App;
