import React from 'react';

export class Timer extends React.Component {
  constructor(props: any) {
    super(props);
  }
  state = { date: new Date() };
  timerID: any;
  
  // this method will called after component has rendered in the DOM
  componentDidMount() {
     this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // When Timer component removed from DOM, the react will call this method execute the code
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ 'date': new Date() });
  }

  render() {
    return (
      <div>
        Time: {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}