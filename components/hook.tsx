import * as React from 'react';
import { useState, useEffect } from "react";

const Hook = (props) => {
  const [name, setName] = useState("vicky");
  const handleChange = (e) => {
    setName(e.target.value)
  };

  useEffect(() => {
    console.log(props.func());
  });

  return (
    <div className="text-center text-danger">
      {name}<br></br>
      <input className="form-control" type="text" onChange={handleChange} value={name}></input>
    </div>
  );
};

export default Hook;