import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import '../../App.css';
import './contact-us.css';
import Footer from '../Footer';
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

    alert('Thank You!')
  }

  render() {
    return (
        <>  
          <div className='form-container'>
            
            <form onSubmit={this.handleSubmit} className="form">
            <h1>Contact Us Page</h1>
            <p className='pform'>
              <input type="text" required name="name" placeholder="Your Name..." id="name" onChange={this.handleInputChange}/>
            </p>
            <p className='pform'>
              <input type="email" required name="email" placeholder="Email..." id="email" onChange={this.handleInputChange}/>
            </p>
            <p className='pform'>
              <input type="text" required name="subject" placeholder="Subject..." id="subject" onChange={this.handleInputChange}/>
            </p>
            <p className='pform'>
              <textarea id="message" name="message" placeholder="Message..." rows={5} cols={30} defaultValue={""} onChange={this.handleInputChange}/>
            </p>
            <p className='pform'>
              <button className="submit" type="submit"> 
              <i className="fa fa-paper-plane" /> SEND
              </button>
            </p>
            </form>
            </div>
            <Footer />
        </>
    )
  }
}

export default ContactUs;