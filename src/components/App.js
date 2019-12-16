import React,{Component} from 'react';

class App extends Component {
  state = {
    name: 'hoang',
    age: '16'
  }

  handleClick = async(e)=> {   //arrow function cannot have this keyword in vanilla JS
    //but works in React
    await this.setState({
      name: 'hoang minh'
    });

    console.log(this.state);
  }

  handleHover =(e) => {
    console.log(e.target);
  }

  handleCopy =() => {
    console.log(' pls be original ');
  }

  handleSubmit =(e) => {
    e.preventDefault();
    console.log('submitted');
  }

  handleChange =(e) => {
    this.setState({
      name: e.target.value
    });
  }

  render(){
    return (
      <div>
        <h1>{this.state.name} dep troai {this.state.age} tuoi</h1>
        {/* <button onClick = {this.handleClick}> click me </button>
        <button onMouseOver = {this.handleHover}>hover me</button>
        <p onCopy = {this.handleCopy}>try copy me</p> */}

        <form onSubmit = {this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;