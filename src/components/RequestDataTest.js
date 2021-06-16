import React, { Component, useState, useEffect } from "react";
import firebase from "../firebase";
import RequestDataService from '../services/request.service';
import RequestDataTestInfo from './RequestDataTestInfo';

export default class RequestDataTest extends Component {
  constructor(props) {
    super(props);
    this.onChangeServiceType = this.onChangeServiceType.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeMechanicId = this.onChangeMechanicId.bind(this);
    this.onChangeOwnerId = this.onChangeOwnerId.bind(this);
    this.saveRequest = this.saveRequest.bind(this);
    this.newRequest = this.newRequest.bind(this);

//sets initial state of request

    this.state = {
      serviceType: "",
      status: "new",
      mechanicId: "",
      ownerId: ""
    };
  }

//function changes state of 'serviceType' property

  onChangeServiceType(e) {
    this.setState({
        serviceType: e.target.value,
    });
  }

//function changes state of 'status' property

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

//function changes state of 'fullName' property

  onChangeMechanicId(e) {
    this.setState({
        mechanicId: e.target.value,
    });
  }

//function changes state of 'phone' property

  onChangeOwnerId(e) {
    this.setState({
      ownerId: e.target.value,
    });
  }

  //function that saves the data when the submit button is clicked

  saveRequest() {
    let data = {
      serviceType: this.state.serviceType,
      status: this.state.status,
      mechanicId: this.state.mechanicId,
      ownerId: this.state.ownerId
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
        serviceType: "",
        status: "new",
        mechanicId: "",
        ownerId: ""
    });
  }

  render() {
    return (
      <div className="submit-form">

          <div>
            <div className="form-group">
              <label htmlFor="serviceType"> Service Type</label>
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

            <div className="form-group">
              <label htmlFor="email">status</label>
              <input
                type="text"
                className="form-control"
                id="status"
                required
                value={this.state.status}
                onChange={this.onChangeStatus}
                name="status"
              />
            </div>


            <div className="form-group">
              <label htmlFor="mechanicId">Mechanic ID</label>
              <input
                type="text"
                className="form-control"
                id="mechanicId"
                required
                value={this.state.mechanicId}
                onChange={this.onChangeMechanicId}
                name="mechanicId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="ownerId">Owner ID</label>
              <input
                type="text"
                className="form-control"
                id="ownerId"
                required
                value={this.state.ownerId}
                onChange={this.onChangeOwnerId}
                name="ownerId"
              />
            </div>

            <button onClick={this.saveRequest} className="btn btn-success">
              Submit
            </button>
          </div>
            <RequestDataTestInfo />
        
      </div>
    );
  }
}
