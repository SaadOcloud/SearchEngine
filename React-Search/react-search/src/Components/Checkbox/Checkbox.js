import React,{Fragment} from "react";

function Checkbox(props) {
  return (
    <Fragment>
      {props.checkboxdata.map((item)  => (
        <div className="checkbox" key={item}>
            <input type="checkbox" defaultChecked="checked" value={item} />
            <label htmlFor="filters">{item}</label>
        </div>
      ))}
    </Fragment>
  );
}
export default Checkbox;
