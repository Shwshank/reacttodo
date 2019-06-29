import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  goToHome() {
    window.location.replace("#/userList");
  }

  render() {
    return (
      <div>
        <button
          onClick={this.goToHome.bind()}>
          Home
        </button>
        <br/>
      </div>
    );
  }
}

export default Header;
