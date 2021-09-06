import React, { useState, useEffect } from "react";
import BasicInfo from "./BasicInfo";
import Card from "./Card";

function User() {
  const [base, setBase] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const fetchData = async () => {
    const response = await fetch(base);
    const data = await response.json();
    setUserInfo(data);
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
    setBase(`https://codeforces.com/api/user.info?handles=${username}`);
    SetUsername("");
  };

  const [username, SetUsername] = useState("");

  return (
    <Card>
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

      {userInfo["status"] === "OK" && (
        <BasicInfo
          handle={userInfo["result"]["0"]["handle"]}
          rating={userInfo["result"]["0"]["rating"]}
          rank={userInfo["result"]["0"]["rank"]}
        />
      )}
    </Card>
  );
}

export default User;
