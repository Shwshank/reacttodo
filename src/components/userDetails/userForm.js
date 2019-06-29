import React from 'react';

class UserForm extends React.Component {

  constructor(props) {
    super(props)
    console.log(props);

    this.state = {
      name: props.user.name,
      id: props.user.id,
      desc: props.user.desc,
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

  saveInfo(){
    this.props.onSubmit(this.state);
    this.setState({
      name:"",
      desc:"",
      id:"",
    })
  }

  render() {

      return (
        <div>
        <p>
        User Details {this.state.id}
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

        <button
        onClick={this.saveInfo.bind(this)}>
        Save info
        </button>

        </div>
      )
  }
}

export default UserForm
