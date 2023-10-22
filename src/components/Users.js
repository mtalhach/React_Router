import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>user 1</div>
      <div>user 2</div>
      <div>user 3</div>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Show Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset</button>
      {showActiveUsers ? (
        <h2>showing active user</h2>
      ) : (
        <h2>showing all users</h2>
      )}
    </>
  );
};

export default Users;
