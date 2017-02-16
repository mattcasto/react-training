import React from 'react'

export default class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let newUser = {
      name: this.refs.name.value,
      email: this.refs.email.value
    }

    this.props.addUser(newUser);
  }

  render() {
    return (<section>
      <h2>Add User</h2>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" ref="name" id="name" className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" ref="email" id="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>);
  }
}