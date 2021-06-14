import React, { Component } from "react";
import MechanicDataService from "../services/mechanic.service";

export default class MechanicDatatTest extends Component {
  constructor(props) {
    super(props);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.saveMechanic = this.saveMechanic.bind(this);
    this.newMechanic = this.newMechanic.bind(this);



//sets initial state of new mechanic class

    this.state = {
      businessName: "",
      email: "",
      fullName: "",
      phone: ""
    };

  }


//function changes state of 'businessName' property

  onChangeBusinessName(e) {
    this.setState({
        businessName: e.target.value,
    });
  }

//function changes state of 'email' property

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

//function changes state of 'fullName' property

  onChangeFullName(e) {
    this.setState({
        fullName: e.target.value,
    });
  }

//function changes state of 'phone' property

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  //function that saves the data when the submit button is clicked

  saveMechanic() {
    let data = {
      businessName: this.state.businessName,
      email: this.state.email,
      fullName: this.state.fullName,
      phone: this.state.phone
    };

    MechanicDataService.create(data)
      .then(() => {
        console.log("Created new mechanic successfully!");

      })
      .catch((e) => {
        console.log(e);
      });
  }

  newMechanic() {
    this.setState({
        businessName: "",
        email: "",
        fullName: "",
        phone: ""
    });
  }

  render() {
    return (
      <div className="submit-form">

          <div>
            <div className="form-group">
              <label htmlFor="title">Business Name</label>
              <input
                type="text"
                className="form-control"
                id="businessName"
                required
                value={this.state.businessName}
                onChange={this.onChangeBusinessName}
                name="businessName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="Email"
              />
            </div>


            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                required
                value={this.state.fullName}
                onChange={this.onChangeFullName}
                name="fullName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="Phone"
              />
            </div>

            <button onClick={this.saveMechanic} className="btn btn-success">
              Submit
            </button>
          </div>

        
      </div>
    );
  }
}