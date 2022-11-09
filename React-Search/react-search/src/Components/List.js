import axios from "axios";
import { React, useEffect, useState } from "react";
import "./List.css";

function List({input}) {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
      try {
        const {data} = await axios.get(`http://localhost:5000/api/user/${input}`);
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }

  useEffect(() => {
    getUsers();
  }, [input])

  return (
    <div className="list-parent">
    <ul className="list-container">
      {users.map((item) => (
        <li className="list" key={item._id}>{item.username}</li>
      ))}
    </ul>
    </div>
  );
}
export default List;
