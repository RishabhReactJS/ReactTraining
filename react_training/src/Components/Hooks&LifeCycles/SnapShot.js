import React, { Component } from 'react';

export default class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.messagesEndRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.scrollToBottom();
    }
  }

  getSnapshotBeforeUpdate(prevProps) {
    // If new messages have been added, capture the scroll position
    if (prevProps.messages.length < this.props.messages.length) {
      const chatWindow = this.messagesEndRef.current;
      return chatWindow.scrollHeight - chatWindow.scrollTop;
    }
    return null;
  }

  scrollToBottom() {
    // Scroll to the bottom of the chat window
    this.messagesEndRef.current.scrollTop =
      this.messagesEndRef.current.scrollHeight;
  }

  render() {
    return (
        <>
        <div>Messages</div>
      <div
        style={{ height: "100px", overflowY: "scroll" }}
        ref={this.messagesEndRef}
      >
        <ul>
        {this.props.messages.map((message) => {
            return <li>{message}</li>
        })}
        </ul>
      </div>
      </>
    );
  }
}
