import React, { Component } from 'react';

export default class SyncedComponent extends Component {
    constructor(props){
        super(props);
        this.state = {internalData: ""}
    }

    componentDidMount(){
      
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      // Check if the external data has changed
      if (nextProps.externalData.length > 10 && nextProps.externalData !== prevState.internalData) {
        // Update the local state to sync with external changes
        return {
          internalData: nextProps.externalData,
        };
      }
      return null; // No state update is necessary
    }
  
    render() {
      const { internalData } = this.state;
  
      return (
        <div>
          <p>Internal Data: {internalData}</p>
        </div>
      );
    }
  }
  