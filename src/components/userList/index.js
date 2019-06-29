import React from "react";
import Header from "../header";

import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from '../../actions';

class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.userDetails = this.userDetails.bind(this);
    this.state = {
      time: this.currentTime(),
      epoch: this.currentEpoch()
    }
  }

  componentWillMount(){
    this.props.getAllUsers()
  }

  componentDidMount() {
    // Update state after 1 second
    this.interval = setInterval(
      () =>
        this.setState({
          time: this.currentTime(),
          epoch: this.currentEpoch()
        }),
      1000
    );
  }

  currentTime() {
    return new Date().toLocaleTimeString();
  }

  currentEpoch() {
    return new Date().valueOf()
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

  checkEpoch(time, name) {
    if(time) {
      let cTime = "";
      let d = new Date();
      this.interval = setInterval(
        () => {
          let min = d.getMinutes();
          if(min<10)
          min +="0"
          cTime = d.getHours()+":"+min
          console.log(cTime +" - "+ time);
          if(cTime === time) {
            alert(name)
            window.location.reload()
          }
        },
        1000
      );
    }

  }

  renderUserCard() {
    let i = 0;

    return this.props.userArray.map(user => {
      return(
        <div  key={user.id}>
          <div>
            name : {user.name} <br/>
            desc : {user.desc} <br/>
            reminder : {user.time}   <br/>
            {this.checkEpoch(user.time+"", user.name)}
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

        <br/>

        <br/>

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
