import React from 'react'

const ChildComponent = React.memo(
  (props) => {
    console.log("Child Components go re-render again");
    
    return (
      <div>
        <button onClick={props.handleClick} >
          {props.buttonName}
        </button>
      </div>
    )
  }
);

export default ChildComponent


// React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga

// if u r sending a function, then react.memo want be able to save you from re-rendering

