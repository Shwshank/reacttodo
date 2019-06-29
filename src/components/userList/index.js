import React from "react";
import Header from "../header";

import { connect } from 'react-redux';
import { getAllUsers } from '../../actions';

class UserList extends React.Component {

  componentWillMount(){
    this.props.getAllUsers()
  }

  userDetails() {
    window.location.replace("#/userDetails/" + 10101);
  }

  renderUserCard() {
    let i = 0;

    return this.props.userArray.map(user => {
      return(
        <div  key={user.name}>
          <div>
            name : {user.name} <br/>
            desc : {user.desc}
          </div>
        </div>
      )
    })

  }

  render() {
    return (
      <div>
        <Header/>
        <button
          onClick={this.userDetails.bind()}>
          Details
        </button>
        <div>
          {this.renderUserCard()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { userArray: state.getAllUsersReducer };
};

export default connect(
  mapStateToProps,
  { getAllUsers }
)(UserList);
