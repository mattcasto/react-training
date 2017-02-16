import React from 'react'

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: '', email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let self = this;

    var user = this.props.users[parseInt(this.props.params.userId)];
      this.setState(Object.assign({},user));
  }

  handleChange(event) {
    let self = this;

    let newState = {
      name: this.refs.name.value,
      email: this.refs.email.value
    }

    self.setState(newState);  
  }

  handleSubmit(event) {
    let self = this;

    self.props.addUser(self.state);
    self.setState({name:'',email:''});

    event.preventDefault();
  }

  render() {
    return (<section>
      <h2>Add User</h2>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" ref="name" id="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" ref="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>);
  }
}