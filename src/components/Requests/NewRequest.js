import React, { Component } from "react";
import RequestDataService from "../../services/request.service";
import Nav from '../Nav/Nav';

export default class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeVehicle = this.onChangeVehicle.bind(this);
    this.onChangeServiceType = this.onChangeServiceType.bind(this);
    this.saveRequest = this.saveRequest.bind(this);
    this.newRequest = this.newRequest.bind(this);

//sets initial state of new Request class

    this.state = {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      vehicle: "",
      serviceType: ""
    };
  }

//function changes state of 'fullName' property

  onChangeFullName(e) {
    this.setState({
        fullName: e.target.value,
    });
  }

//function changes state of 'email' property

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

//function changes state of 'phone' property

  onChangePhone(e) {
    this.setState({
        phone: e.target.value,
    });
  }

//function changes state of 'location' property

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  //function changes state of 'vehicle' property

  onChangeVehicle(e) {
    this.setState({
      vehicle: e.target.value,
    });
  }

  //function changes state of 'location' property

  onChangeServiceType(e) {
    this.setState({
      serviceType: e.target.value,
    });
  }

  //function that saves the data when the submit button is clicked

  saveRequest() {
    let data = {
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
      location: this.state.location,
      vehicle: this.state.vehicle,
      serviceType: this.state.serviceType
    };

    RequestDataService.create(data)
      .then(() => {
        console.log("Created new request successfully!");

      })
      .catch((e) => {
        console.log(e);
      });
  }

  newRequest() {
    this.setState({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      vehicle: "",
      serviceType: ""
    });
  }

  render() {
    return (
      <div className="submit-form">
          <Nav />
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
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                required
                value={this.state.location}
                onChange={this.onChangeLocation}
                name="location"
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicle">Vehicle Make and Model</label>
              <input
                type="text"
                className="form-control"
                id="vehicle"
                required
                value={this.state.vehicle}
                onChange={this.onChangeVehicle}
                name="vehicle"
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">Type of Service</label>
              <input
                type="text"
                className="form-control"
                id="serviceType"
                required
                value={this.state.serviceType}
                onChange={this.onChangeServiceType}
                name="serviceType"
              />
            </div>
            <a href="/success">
            <button onClick={this.saveRequest} className="btn btn-success">
              Submit
            </button>
            </a>
      </div>
    );
  }
}