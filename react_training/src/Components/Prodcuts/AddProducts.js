import React, { Component } from 'react';

class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputName = React.createRef();
    this.inputDesc = React.createRef();
    this.inputNumber = React.createRef();
  }

//   state = { name: "Honor8", description: "latest phone", price: 12 };

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
    // alert('A name was submitted: ' + this.input.current.value);
    // this.setState((prevState) => {return {...prevState, name: this.input.current.value}});
    this.props.updateProduct({
        name: this.inputName.current.value,
        description: this.inputDesc.current.value,
        price: this.inputNumber.current.value
    })
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
        <div className='padding-top'>Add Products</div>
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type={"text"} ref={this.inputName} defaultValue={"Honor8"} />
            <input type={"text"} ref={this.inputDesc} defaultValue={"Latest 5G phone"} />
            <input type={"nummber"} ref={this.inputNumber} defaultValue={49} />
            <input type={"submit"}  value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProducts;
