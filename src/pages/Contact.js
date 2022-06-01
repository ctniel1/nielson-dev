import React, { useState } from 'react'
import { send } from 'emailjs-com';
import '../assets/styles/contact.css'

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Chris',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_c3v9upk',
      'template_ep05cnq',
      toSend,
      '2K4ztP5UgkeEPlKTG'
    )
      .then((response) => {
        window.alert('Message sent successfully! Thank you!')
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setToSend({ ...toSend, from_name: '', message: '', reply_to: ''})
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='contact-container'>
      <h3>Send me a message!</h3>
      <form className='contact-form' onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type='text'
          name='from_name'
          placeholder='Name'
          className='input'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type='text'
          name='reply_to'
          placeholder='Email'
          className='input'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          type='text'
          name='message'
          placeholder='Message'
          className='input'
          value={toSend.message}
          onChange={handleChange}
        />
        <button type='submit' className='submit-btn'>Submit</button>
      </form>
    </div>
  )
}