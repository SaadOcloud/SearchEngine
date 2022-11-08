import axios from "axios";
import { React, useEffect, useState } from "react";

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
    <ul>
      {users.map((item) => (
        <li key={item._id}>{item.username}</li>
      ))}
    </ul>
  );
}


export default List;
