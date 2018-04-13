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
    lower: 0,
    higher:0,
    message: ""
  }
    handleCalculateHeartRateZones  = (myAge, myRate)=>{

      let x = 999;
      let my_rate = myRate;
      let max = 220 - myAge;
      let hrr = max - myRate;
      let lower = (hrr * .7) + parseInt(myRate);
      let higher =(hrr * .85) + parseInt(myRate);


      console.log(hrr);


     if(!myAge || !myRate){
       return 'please enter your age and resting heart rate'
     }
     else if(myAge < 0 || myRate < 0){
       return 'Age and resting heart rate should be above 0'
     }

      this.setState(()=>({
        age: myAge,
        rate: my_rate,
        max: max,
        hrr: hrr,

        lower: lower,
        higher: higher,

        message: 'Here are your recommended heart rate zones for exercising:'

      }))
    }
  render(){
    return(
      <div className="container">
      <Header />
      <GetZones handleCalculateHeartRateZones={this.handleCalculateHeartRateZones}/>
      <DisplayZones age={this.state.age} rate={this.state.rate} lower={this.state.lower} higher={this.state.higher} max={this.state.max} hrr={this.state.hrr} message={this.state.message}/>
      <Footer />
      </div>
    )
  }
}

export default HeartRateApp;
