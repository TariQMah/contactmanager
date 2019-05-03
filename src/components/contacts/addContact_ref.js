import React, { Component } from "react";

class addContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "tariq",
    email: "t.ali1993@hotmail.com",
    phone: "030000000"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                defaultValue={name}
                name="name"
                type="text"
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                defaultValue={email}
                name="email"
                type="email"
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                className="form-control"
                defaultValue={phone}
                name="phone"
                type="text"
                ref={this.phoneInput}
              />
            </div>

            <input
              className="btn btn-block btn-light"
              value="Add Contact"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default addContact;
