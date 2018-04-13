import React from 'react';
import Header from './Header';
import Footer from './Footer'
import GetZones from './GetZones';
import DisplayZones from './DisplayZones';

class HeartRateApp extends React.Component{
  state = {
    age: 0,
    rate: 0,
    max: 0,
    hrr: 0,
    mod_lower:0,
    vig_lower: 0,
    vig_higher:0,
    message: ""
  }
    handleCalculateHeartRateZones  = (myAge, myRate)=>{


      let max = 220 - myAge;
      let hrr = max - myRate;
      let mod_lower = Math.round((hrr * .4) + parseInt(myRate));
      let vig_lower = Math.round((hrr * .7) + parseInt(myRate));
      let vig_higher =Math.round((hrr * .85) + parseInt(myRate));


     if(!myAge || !myRate){
       return 'please enter your age and resting heart rate'
     }
     else if(myAge < 0 || myRate < 0){
       return 'Age and resting heart rate should be above 0'
     }

      this.setState(()=>({
        age: myAge,
        rate: myRate,
        max,
        hrr,
        mod_lower,
        vig_lower,
        vig_higher,

        message: 'Here are your recommended heart rate zones for exercising:'

      }))
    }
  render(){
    return(
      <div className="container">
      <Header />
      <GetZones handleCalculateHeartRateZones={this.handleCalculateHeartRateZones}/>
      <DisplayZones age={this.state.age} rate={this.state.rate} mod_lower={this.state.mod_lower} vig_lower={this.state.vig_lower} vig_higher={this.state.vig_higher} max={this.state.max} hrr={this.state.hrr} message={this.state.message}/>
      <Footer />
      </div>
    )
  }
}

export default HeartRateApp;
