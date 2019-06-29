import React from 'react';

class UserForm extends React.Component {

  constructor(props) {
    super(props)
    console.log(props);

    this.state = {
      name: props.user.name,
      id: props.user.id,
      desc: props.user.desc,
      time: props.user.time,
    }
  }

  nameChanged = async event => {
    await this.setState({
      name: event.target.value
    });
  };

  descChanged = async event => {
    await this.setState({
      desc: event.target.value
    });
  };

  timeChanged = async event =>{
    await this.setState({
      time: event.target.value
    })
  }

  saveInfo(){
    this.props.onSubmit(this.state);
    this.setState({
      name:"",
      desc:"",
      id:"",
      time:""
    })
  }

  showTime() {
    console.log(this.state.time);
    if(this.state.time) {

      return(
        <div>
         reminder @ {this.state.time}
        </div>
      )
    }
  }

  render() {

      return (

        <div>
        <p>
        Task Details {this.showTime()}
        </p>

        <input
        type="text"
        value = {this.state.name}
        onChange = {this.nameChanged}
        placeholder = "Name"
        />

        <input
        type="text"
        value = {this.state.desc}
        onChange = {this.descChanged}
        placeholder = "Desc"
        />

        <input
          type="time"
          value = {this.state.time}
          onChange = {this.timeChanged}
        />

        <button
        onClick={this.saveInfo.bind(this)}>
        Save info
        </button>

        </div>
      )
  }
}

export default UserForm
