import React from 'react'

export default class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.user.name,
      email: props.user.email
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newState = {
      name: this.refs.name.value,
      email: this.refs.email.value
    };

    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

    let userToUpdate;
    if (this.props.id) { 
      userToUpdate = {
        id: parseInt(this.props.id),
        name: this.state.name,
        email: this.state.email
      };
    } else {
      userToUpdate = this.state;
    }

    this.props.addUser(userToUpdate);
  }

  render() {
    return (<section>
      <h2>Add User</h2>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" value={this.state.name} onChange={this.handleChange} ref="name" id="name" className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={this.state.email} onChange={this.handleChange} ref="email" id="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>);
  }
}
