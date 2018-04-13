import React from 'react';

const DisplayZones = (props)=>(


  <div className="displayContainer">
  {props.message != '' && <p className="myZones-bigger">{props.message}</p>}
  {props.age > 0 && <p className="myZones"><span className="myZones-span">Your age:</span> {props.age}. <span className="myZones-span">Your resting heart rate:</span> {props.rate}</p>}
  {props.mod_lower > 0 &&  <p className="myZones"><span className="myZones-span">For moderate intensity:</span> your recommended lower range: {props.mod_lower}. Your recommended upper range: {props.vig_lower}</p>}
  {props.vig_lower > 0 &&  <p className="myZones"><span className="myZones-span">For vigorous intensity:</span> your recommended lower range: {props.vig_lower}. Your recommended upper range: {props.vig_higher}</p>}

  {props.max > 0 &&   <p className="myZones"> <span className="myZones-span">Your max heart rate: {props.max}</span></p>}

  </div>
)




export default DisplayZones;
