import React, { Component } from 'react';
//import 
import '../../App.css';
import './contact-us.css';
import axios from 'axios';

class ContactUs extends Component {
  constructor(props){
    super(props);

    this.state = {
      name:'',
      email:'',
      subject:'',
      message:''
    };
  }

  /*
  complete= ()=>{
    alert('Thank You for filling up. We will get back to you shortly.')
  }*/

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name,email,subject,message } = this.state;

    const data ={
      name,
      email,
      subject,
      message
    }; 

    axios
      .post('http://localhost:5000/add',data)
      .then(()=> console.log('Added log to Database'))
      .catch(err => {
        console.error(err);
      });

  }

  render() {
    return (
        <>
            <h1>Contact Us Page</h1>
            <form onSubmit={this.handleSubmit}>
            <p>
              <input type="text" required name="name" placeholder="Your Name..." id="name" onChange={this.handleInputChange}/>
            </p>
            <p>
              <input type="email" required name="email" placeholder="Email..." id="email" onChange={this.handleInputChange}/>
            </p>
            <p>
              <input type="text" required name="subject" placeholder="Subject..." id="subject" onChange={this.handleInputChange}/>
            </p>
            <p>
              <textarea id="message" name="message" placeholder="Message..." rows={5} cols={30} defaultValue={""} onChange={this.handleInputChange}/>
            </p>
            <p>
              <button className="submit" type="submit">
              <i className="fa fa-paper-plane" /> SEND
              </button>
            </p>
            </form>
        </>
    )
  }
}

export default ContactUs;