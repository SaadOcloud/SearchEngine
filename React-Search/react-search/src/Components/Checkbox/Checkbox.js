import React,{Fragment} from "react";

function Checkbox(props) {
  return (
    <Fragment>
      {props.checkboxdata.map((item) => (
        <div className="checkbox">
            <input type="checkbox" defaultChecked="checked" value={item} />
            <label>{item}</label>
        </div>
      ))}
    </Fragment>
  );
}
export default Checkbox;
