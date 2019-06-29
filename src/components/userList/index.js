import React from "react";
import Header from "../header";

import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from '../../actions';

class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.userDetails = this.userDetails.bind(this);
  }

  componentWillMount(){
    this.props.getAllUsers()

  }

  newUserDetails() {
    let id = Math.floor(Math.random()*(893)+101);
    window.location.replace("#/userDetails/" + id);
  }

  userDetails(id){
    window.location.replace("#/userDetails/" + id);
  }

  userDelete=(id)=>{
    this.props.deleteUser(id)
  }

  renderUserCard() {
    let i = 0;

    return this.props.userArray.map(user => {
      return(
        <div  key={user.id}>
          <div>
            name : {user.name} <br/>
            desc : {user.desc}
            <button
              onClick={this.userDetails.bind(this,user.id)}>
              edit
            </button>

            <button
              onClick={this.userDelete.bind(this,user.id)}>
              delete
            </button>

          </div>
          <br/>
        </div>
      )
    })

  }

  render() {
    return (
      <div>

        <button
          onClick={this.newUserDetails.bind()}>
          Add a new task
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
  { getAllUsers, deleteUser }
)(UserList);
