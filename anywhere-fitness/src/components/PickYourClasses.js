import React, { useState, useEffect } from "react";
import axios from "axios";
import Class from "./Class";

const initialState = [];

const PickYourClasses = () => {
  const [classes, setClasses] = useState(initialState);
  //   console.log(classes, "class hit");

  useEffect(() => {
    axios
      .get("https://anywhere-fitnessbackend.herokuapp.com/api/classes")
      .then((res) => {
        // console.log(res.data);
        setClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="classes">
      {/* <h1>this is where the classes will be</h1> */}
      {classes.map((c, i) => (
        <Class key={i} class={c} />
      ))}
    </div>
  );
};

export default PickYourClasses;
