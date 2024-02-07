import React, { Component } from 'react';

class DataFetchingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
      user:  null,
      class: null
    };
    console.log('1. Constructor');
  }

  componentDidMount() {
    console.log('4. componentDidMount');
    // Simulate fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched:', data);
        this.setState({ data, loading: false });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ error, loading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('7. componentDidUpdate');
    // Check if data has changed
    if (prevState.data !== this.state.data) {
      console.log('Data updated:', this.state.data);
    }
  }

  componentWillUnmount() {
    console.log('8. componentWillUnmount');
    // Clean up tasks if needed
  }

  render() {
    console.log('3. Render');
    const { data, loading, error, ...otherState } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div>
        <h1>Data from API:</h1>
        <p>{data.title}</p>
      </div>
    );
  }
}

export default DataFetchingComponent;
