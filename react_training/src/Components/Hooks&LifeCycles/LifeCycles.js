import React, { Component } from 'react';

class LifecycleExample extends Component {
  // 1. Mounting Phase
  constructor(props) {
    super(props);
    console.log('1. Constructor');
    this.state = {
      message: 'Hello, React!',
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('2. getDerivedStateFromProps');
    return null;
  }

  render() {
    console.log('3. Render');
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }

  componentDidMount() {
    console.log('4. componentDidMount');
  }

  // 2. Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate');
  }

  // 3. Unmounting Phase
  componentWillUnmount() {
    console.log('8. componentWillUnmount');
  }

  // Error Handling
  static getDerivedStateFromError(error) {
    console.log('9. getDerivedStateFromError');
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('10. componentDidCatch');
    // log the error to an error reporting service
  }

  render() {
    console.log('3. Render');
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default LifecycleExample;
