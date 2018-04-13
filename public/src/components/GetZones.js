import React from 'react';

export default class GetZones extends React.Component{
  state = {
    error: undefined
  }

  handleCalculateHeartRateZones = (e)=>{
    e.preventDefault();
    const age = e.target.elements.age.value.trim();
    const resting_heart_rate = e.target.elements.rhr.value.trim();
    const error = this.props.handleCalculateHeartRateZones(age, resting_heart_rate);
    this.setState(()=>({ error }));

    if(!error){
      e.target.elements.age.value = '';
      e.target.elements.rhr.value = '';
    }
  }
  render(){

    return(
      <div>
      {this.state.error && <p className="get-zone-error">{this.state.error}</p>}
      <form  className="get-zone" onSubmit={this.handleCalculateHeartRateZones}>
      <input className="get-zone-input" type="number" name="age" placeholder="Age"/>
      <input className="get-zone-input"  type="number" name="rhr"  placeholder="Resting Heart Rate"/>
      <button   className="button">Get your zones </button>
      </form>

      </div>
    )
  }
}
