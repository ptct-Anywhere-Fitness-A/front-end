import React from "react";

const Class = (props) => {
  console.log(props, "hit props");

  function Attend() {
    const slots =
      `${props.class.number_of_attendees}` < `${props.class.max_class_size}`
        ? "You're in"
        : "Class is Full";
    return slots;
    //{/* wanting to display *youre in* and to disable the attend button with an axios.put to update the class attendees  */}
  }

  function Withdraw() {}

  function isDisabled() {
    /*toggle disable for buttons*/
  }

  return (
    //any styling can be replaced with styled components. (placeholders for now)
    <div className="classCard">
      <h2>{props.class.class_name}</h2>
      <p>{props.class.class_type}</p>
      <p>Duration: {props.class.duration}</p>
      <p>Intesity level: {props.class.intensity_level}</p>
      <p>location: {props.class.location}</p>
      <p>
        Number of peers: {props.class.number_of_attendees}/
        {props.class.max_class_size}
      </p>
      <p>Start Time: {props.class.start_time}</p>
      <button id="attend">Attend</button>
      <button id="withdraw" disabled onClick={Withdraw()}>
        withdraw
      </button>
      {/*using a ternary expression to replace attend button with withdrawl*/}
    </div>
  );
};

export default Class;
