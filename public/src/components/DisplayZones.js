import React from 'react';
import Footer from './Footer'

const DisplayZones = (props)=>(

  <div className="displayContainer">

  {props.age > 0 && <div className="myZones"><p><span className="myZones-bold">Your age:</span> {props.age}.</p> <span className="myZones-bold">Your resting heart rate:</span> {props.rate} bpm.</div>}

  {props.mod_lower > 0 &&
    <div className="myZones">
     <p className="myZones-bold">For moderate intensity:</p>
     Stay between {props.mod_lower} and {props.vig_lower} bpm.
     </div>}

       {props.vig_lower > 0 &&  <div className="myZones"><p className="myZones-bold">For vigorous intensity:</p> Stay between {props.vig_lower} and {props.vig_higher} bpm.</div>}

       {props.max > 0 &&   <p className="myZones"> <span className="myZones-bold">Your max heart rate:</span> {props.max} bpm.</p>}
     {props.max > 0 && <Footer />}
  </div>
)




export default DisplayZones;
