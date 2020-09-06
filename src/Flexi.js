import React, { useState, useEffect } from "react";

const Flexi = ({ onSubmit, config }) => {
    const [inputVal, setInputVal] = useState("");
    const [dataVal, setDataVal] = useState("");
       
    const onChangeHandler = (e) => {
      setInputVal(e.target.value);
    };
  
    const changeDataHandler = (e) => {
      setDataVal(e.target.value);
    };
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      onSubmit({ name: inputVal, data: dataVal });
    };

return (
    <div className="flexi-form">
      <h1 style={{textAlign:"center", color:"blue"}}>User Form</h1>
      <form>
        {(config.length > 0) ? config.map((val) => {
          if (val.type === "TextField") {
            return (
              <div className="person-name">
                <label htmlFor={val.label}>{val.label} : </label>
                <input className="person-name_value" type="text" id={val.label} onChange={onChangeHandler} />
              </div>
            );
          }
          if (val.type === "DropDown") {
            return (
              <div className="person-city">
                <label htmlFor={val.label}>{val.label} : </label>
                <select className="person-dropdown" id={val.label} onChange={changeDataHandler}>
                  <option value="" />
                  {val.values.map(data => {
                    return <option value={data}>{data}</option>;
                  })}
                </select>
              </div>
            );
          }
        }): <h2>Nothing to show</h2> }
        <div className="submitBtn">
          <button className="btn" type="submit" onClick={onSubmitHandler}>Submit</button>
        </div>
      </form>
    </div>
);

};

export default Flexi;