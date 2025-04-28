"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
// import Modal from './Modal';


const ContactSection = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_ob5b671',     // service ID
      'template_0kkj5tt',    //template ID
      form.current,
      'p8M0HUiDuIBG7ekST'      // public key
    ).then(
      (result) => {
        console.log('Email sent:', result.text)
        // alert('Message sent successfully!')
      },
      (error) => {
        console.error('Failed to send email:', error.text)
        // alert('Message failed to send.')
      }
    )
  }


  return (
    <section className="grid md:grid-cols-2 my-12 py-24 md:mt-10 mt-0 gap-4 " id='contact'>
      
      <div> 
        <h5 className="text-4xl font-bold text-white my-5 ">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
      
        <div className="socials flex flex-row gap-2">
        </div>

      </div>

      <div>
          <form className="flex flex-col gap-4" onSubmit={sendEmail} ref={form}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-base font-medium"
              >
                Your email
              </label>
              <input
                name="name"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="alex@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-base mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="title"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-base mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="self-center w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg "
            >
              Send Message
            </button>
          </form>
      </div>
    </section>
  );
}

export default ContactSection