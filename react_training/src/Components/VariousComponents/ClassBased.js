import React, { Component } from 'react';
import SyncedComponent from '../Hooks&LifeCycles/DerivedState';
import DataFetchingComponent from '../Hooks&LifeCycles/DataFetchingComponent'
class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.inputNumber = React.createRef();
  }

  state = { name: "Rishabh", age: 12 };

  componentDidMount() {
    console.log("in componentDidMount");
  }
  componentDidUpdate() {
    console.log("in componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate');
    return null;
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('2. getDerivedStateFromProps');
    return null;
  }

  componentWillUnmount() {
    console.log("in componentWillUnmount");
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event){
    alert('A name was submitted: ' + this.input.current.value);
    this.setState((prevState) => {return {...prevState, name: this.input.current.value}});
    event.preventDefault();
  }

  handleControlledSubmit = () =>{
    alert('A name was submitted: ' + this.state.name);
    // event.preventDefault();
  }

  render() {
    console.log('in render');
    return (
      <div className="App">
          {/* <ChatWindow messages={message}/> */}
        <div className='heading padding-top'>Class Component</div>
        <div className='padding-top'>Controlled Component</div>
        <label htmlFor="fname">Name</label>
        <input type={"text"} id="fname" defaultValue={this.state.name}  onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleControlledSubmit}>Submit</button>
        <div>{this.state.name}</div>
        {/* <div className='padding-top'>Uncontrolled Component</div>
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type={"text"} ref={this.input} defaultValue={this.state.name} />
            <input type={"nummber"} ref={this.inputNumber} defaultValue={this.state.age} />
            <input type={"submit"}  value="Submit" />
        </form> */}
        {/* <SyncedComponent externalData={this.state.name}/> */}
        {/* <DataFetchingComponent /> */}
      </div>
    );
  }
}

export default ClassBased;
