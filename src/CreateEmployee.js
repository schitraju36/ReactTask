import React, { Component } from "react";
import Axios from 'axios'; 

export default class CreateEmployee extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
      catererObj:{
        "capacity": {
          "maximum_guests": null,
          "minimum_guests": null
        },
        "caterId":332,
        "contactInfo": {
          "email": "",
          "mobie_number": "",
          "phone_number": ""
        },
        "location": {
          "city": "",
          "postal_code": "",
          "street": ""
        },
        "name": ""
      },
      msg:''
    };

    
  
	 this.handleSubmit = this.handleSubmit.bind(this);
	}
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "mobile") {
      if (!Number(val)) {
        alert("Your Mobile must be a number");
      }
    }
    this.setState({[nam]: val});
  }
  handleSubmit(event) {
	 // console.log(this.state);
    let caterervo={
      "capacity": {
        "maximum_guests": this.state.maxcapacity,
        "minimum_guests": this.state.mincapacity
      },
      "caterId":9999,
      "contactInfo": {
        "email": this.state.email,
        "mobie_number": this.state.mobile,
        "phone_number": this.state.phone
      },
      "location": {
        "city": this.state.city,
        "postal_code": this.state.pincode,
        "street": this.state.street
      },
      "name": this.state.username
    }
console.log(caterervo);
Axios.post('http://localhost:8080/createCaterer', caterervo)
.then(response => this.setState({ msg: response.msg }));
	  event.preventDefault();
	}
  render() {
    return (
      <div class="row">

        <div class="col-4">
         
        </div>
        <div class="col-4">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
            <div className="form-group row">
              <label class="col-sm-4 col-form-label">Name</label>
              <div class="col-sm-8">
                <input type="text" className="form-control" placeholder="Name"
                  name='username' onChange={this.myChangeHandler}/>
              </div>
            </div>

            <div className="form-group row">
              <label class="col-sm-4 col-form-label">City</label>
              <div class="col-sm-8">
                <input type="text" className="form-control" placeholder="City"
                 name='city'
                 onChange={this.myChangeHandler} />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-4 col-form-label">Street</label>
              <div class="col-sm-8">
                <input type="text" className="form-control" placeholder="Street" 
                 name='street'
                 onChange={this.myChangeHandler}/>
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-4 col-form-label">PinCode</label>
              <div class="col-sm-8">
                <input type="text" className="form-control" placeholder="PinCode"
                 name='pincode'
                 onChange={this.myChangeHandler} />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-4 col-form-label">Email address</label>
              <div class="col-sm-8">
                <input type="email" className="form-control" placeholder="Enter email"
                 name='email'
                 onChange={this.myChangeHandler} />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-4 col-form-label">Mobile</label>
              <div class="col-sm-8">
                <input type="text" className="form-control" placeholder="Mobile"
                 name='mobile'
                 onChange={this.myChangeHandler} />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-4 col-form-label">Phone</label>
              <div class="col-sm-8">
                <input type="text" className="form-control" placeholder="Phone" 
                 name='phone'
                 onChange={this.myChangeHandler}/>
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-4 col-form-label">MinCapacity</label>
              <div class="col-sm-8">
                <input type="text" className="form-control" placeholder="MinCapacity"
                 name='mincapacity'
                 onChange={this.myChangeHandler} />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-4 col-form-label">MaxCapacity</label>
              <div class="col-sm-8">
                <input type="text" className="form-control" placeholder="MaxCapacity" 
                 name='maxcapacity'
                 onChange={this.myChangeHandler}/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>

          </form>
         
        </div>
        <div class="col-4"></div>


      </div>
    );
  }
}