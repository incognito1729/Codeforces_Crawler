import React, { useState, useEffect } from "react";
import Card from "./Card";
import UserStat from "./UserStat";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css";

function UserSubmission(prop) {
  const [base, setBase] = useState("");
  const [submission, setSubmission] = useState("");
  const fetchData = async () => {
    const response = await fetch(base);
    const data = await response.json();
    setSubmission(data);
    console.log(data);
  };

  useEffect(() => {
    if (base.length === 0) {
      return;
    }
    fetchData();
  }, [base]);
  const submitHandler = (e) => {
    // console.log(handle);
    e.preventDefault();

    setBase(`https://codeforces.com/api/user.status?handle=${username}`);
    // SetUsername("");
  };
  const [username, SetUsername] = useState("");
  return (
    <Card >
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            SetUsername(e.target.value);
          }}
        />
      </form>
      {username.length > 0 && <Welcome username={username} />}
      {submission["status"] === "OK" && (
        <UserStat submission={submission} username={username} />
      )}
    </Card>
  );
}

export default UserSubmission;
