import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2> 
      <input type="text" onChange={(e)=> props.setName(e.target.value)} />
      <p>Name state variable ki value inside Card: {props.name} </p>
    </div>
  )
}

export default Card
