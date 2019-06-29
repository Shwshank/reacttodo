import React from "react";
import _ from 'lodash';
import { connect } from 'react-redux';

import { getAllUsers, getUserInfo, addUser } from '../../actions';
import UserForm from './userForm'

class UserDetails extends React.Component {


  componentWillMount() {
    this.props.getAllUsers()
    console.log(this.props.match.params.id);
    console.log(this.props);
    this.props.getUserInfo(this.props.match.params.id)
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  saveInfo =(user)=> {
    console.log(user);
    this.props.addUser(user)

  }

  render() {
    if(!this.props.user.id) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      return(
        <div>
          <UserForm
            user = {this.props.user}
            onSubmit = {this.saveInfo}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    userArray: state.getAllUsersReducer,
    user: state.getUserReducer
   };
};

export default connect(
  mapStateToProps,
  {getAllUsers, getUserInfo, addUser}
)(UserDetails);
