import { React } from "react";
import data from "./ListData.json";

function List(props) {
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}


export default List;
