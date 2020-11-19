import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { maxChars: 0, text: "" };
  }

  handleEvent(event) {
    this.setState({
      maxChars: event.target.value.length,
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.text}
          onChange={(e) => this.handleEvent(e)}
        />
        {280 - this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
