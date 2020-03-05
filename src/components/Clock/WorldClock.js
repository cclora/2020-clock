import React, {Component} from 'react';
class WorldClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          local: props.local ? props.local : "Europe/London",
          date: null
        };
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          2000
        );
      }
    
      tick() {
        let {local} = this.state;
        let url = 'http://worldtimeapi.org/api/timezone/' + local;
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              date: new Date(result.datetime)
            });
          },
          (error) => {
            this.setState({
              isLoaded: false,
              error
            });
          }
        )
        // this.setState({
        //   date: new Date()
        // });
        // this.state = {date: new Date};
      }
    
      render() {
        let {error, isLoaded, local, date} = this.state;
        if(error) {
          return (
            <div>
              <h2>wRODL clock :/ {error.message}.</h2>
            </div>
          );
        }
        else if(!isLoaded){
          return (
            <div>
              <h2>wRODL clock is loadig.</h2>
            </div>
          );
        }
        else{
          return (
            <div>
              <h2>{local ? local : 'wihodn'} {date}</h2>
            </div>
          );
        }
      }
  }
  export default WorldClock;