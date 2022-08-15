/*
  Instructions
  See the comments in handleLightMode and handleDarkMode
*/

import * as React from "react";
import './theme.css';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "dark"
    };
  }
  handleLightMode() {
    // Change 'mode' on the component's state to 'light'
  }
  handleDarkMode() {
    // Change 'mode' on the component's state to 'dark'
  }
  render() {
    const { mode } = this.state;

    return (
      <main className={mode}>
        {mode === "light" ? (
          <button onClick={this.handleDarkMode}>Activate Dark Mode</button>
        ) : (
          <button onClick={this.handleLightMode}>Activate Light Mode</button>
        )}
      </main>
    );
  }
}

export default function App() {
  return <Container />;
}
