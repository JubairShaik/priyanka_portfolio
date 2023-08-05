import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
        <div class="contact-section">
  <h2>Contact Me</h2>
  <p>Phone: <a href="tel:+91 9676497384">+91 9676497384</a></p>
  <p  >Email:  <a className=" text-blue-600" href="mailto:20pa1a0567@vishnu.edu.in">20pa1a0567@vishnu.edu.in</a></p>
</div>
          <p className="py-6"> Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 md:p-3  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 md:p-3  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2  md:p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
            >

            </textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
