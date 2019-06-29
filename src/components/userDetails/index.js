import React from "react";

class UserDetails extends React.Component {

  componentWillMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <p>
         User Details {this.props.match.params.id}
        </p>
      </div>
    )
  }

}

export default UserDetails
