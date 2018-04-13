import React from 'react';

const DisplayZones = (props)=>(


  <div className="displayContainer">
  <p className="myZones-bigger">{props.message}</p>
  {props.age > 0 && <p className="myZones">Your age: {props.age}</p>}
  {props.rate > 0 && <p className="myZones">Your resting heart rate: {props.rate}</p>}
  {props.lower > 0 &&   <p className="myZones">Your recommended lower range: {props.lower}</p>}
  {props.higher > 0 && <p className="myZones"> Your recommended upper range: {props.higher}</p>}
  {props.max > 0 &&   <p className="myZones"> Your max heart rate: {props.max}</p>}
 
  </div>
)




export default DisplayZones;
