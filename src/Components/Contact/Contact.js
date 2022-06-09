import React from 'react';
import emailjs from 'emailjs-com';
import facebook from '../../images/facebook.png'
import linkedIn from '../../images/LinkedIn.svg'
const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_jg1wfhq',
        'template_s8d7ylq',
        event.target,
        'l4Or0Dnd39yITfRH4'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold w-96">Contact With Me</h1>
                  <div className='flex items-center'>
              <a href="https://www.facebook.com/progshahidul/" target="_blank"><img width="80px" src={facebook} alt="" /></a>
              <a href="https://www.linkedin.com/in/progshahidul/" target="_blank"><img width="60px" src={linkedIn} alt="" /></a>
              
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={sendEmail}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Bio</span>
                </label>

                <textarea
                  class="textarea textarea-bordered"
                  name="message"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn  bg-[#DA6068] border-0">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    //     <div>
    //     <div className="grid  grid-cols-1 sm:w-fit lg:w-2/4 mx-auto bg-[#e4d5d536] py-8 px-5 mt-12 rounded-lg shadow-xl ">
    //             <h1 className=" text-2xl mb-5">Contact Form</h1>

    //       <form onSubmit={sendEmail}>
    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="Your Name"
    //           class=" input input-bordered border-[#DA6068]  w-full  mt-3"
    //         />
    //         <input
    //           type="email"
    //           name="user_email"
    //           placeholder="Email"
    //           class="input input-bordered border-[#DA6068] w-full mt-3"
    //         />
    //         <textarea
    //           class="textarea textarea-bordered border-[#DA6068] w-full mt-3"
    //           name="message"
    //           placeholder="Bio"
    //         ></textarea>
    //         <input
    //           className="btn  bg-[#DA6068] mt-3 border-0"
    //           type="submit"
    //           value="Send"
    //         />
    //       </form>

    //     </div>
    //   </div>
  );
};

export default Contact;
