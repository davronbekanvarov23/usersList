import React from "react";
import { useSelector } from "react-redux";

function List() {
  const { users } = useSelector((state) => state.user);
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h1>Ism:{user.Ism}</h1>
            <h1>Familiya:{user.Familiya}</h1>
            <h1>Davlat:{user.Davlat}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default List;
