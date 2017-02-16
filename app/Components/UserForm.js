import React from 'react'

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: '', email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let self = this;

    let val = event.target.value;
    let newState = Object.assign({}, self.state);
    newState[event.target.id] = val;
    self.setState(newState);  
  }

  handleSubmit(event) {
    let self = this;

    self.props.addUser(self.state);
    event.preventDefault();
  }

  render() {
    return (<section>
      <h2>Add User</h2>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" onChange={this.handleChange} className="form-control" id="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>);
  }
}