import React,{Component} from 'react';
import Tests from './Tests';
import AddTest from './AddTest';

//CONTAINER component -> have state / have class contains other UI component
class App extends Component {  
  state = {
    name: 'hoang',
    age: '16',
    tests_list: [
      { testname: "hoang1", testage: 19, id: 1 },
      { testname: "hoang2", testage: 20, id: 2 },
      { testname: "hoang3", testage: 21, id: 3 }
    ]
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
    return (  //JSX
      <div>
        <h1>{this.state.name} dep troai {this.state.age} tuoi</h1>
        {/* <button onClick = {this.handleClick}> click me </button>
        <button onMouseOver = {this.handleHover}>hover me</button>
        <p onCopy = {this.handleCopy}>try copy me</p> */}

        {/* <form onSubmit = {this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <button>Submit</button>
        </form> */}

        <Tests tests_list = {this.state.tests_list}/>
        <AddTest/>
      </div>
    )
  }
}

export default App;