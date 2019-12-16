import React,{Component} from 'react';

class AddTest extends Component {

  state = {
    "name":null,
    "age":null
  }

  handleSubmit =(e) => {
    e.preventDefault();
    this.props.add_test(this.state);
  }

  handleChange =(e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label htmlFor = "name">TestName:</label>
        <input type="text" id = "name" onChange = {this.handleChange}/>
        <label htmlFor = "age">TestAge:</label>
        <input type="text" id = "age" onChange = {this.handleChange}/>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddTest;