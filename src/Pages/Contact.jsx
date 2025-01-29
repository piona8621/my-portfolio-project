





// import React, { useRef, useState } from "react";
// import { BiLogoGmail } from "react-icons/bi";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";
// import { FaLocationArrow, FaPhone } from "react-icons/fa";
// import email from '../assets/image/email.svg'
// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState(""); // To show success/failure messages

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_jhd42d4", "template_a8330ws", form.current, {
//         publicKey: "Q8hAmHnrsQpO9tspF",
//       })
//       .then(
//         () => {
//           Swal.fire({
//             title: "Success!",
//             text: "Your message has been sent successfully.",
//             icon: "success",
//             confirmButtonText: "Okay",
//           });
//           setStatus("Message sent successfully!");
//         },
//         (error) => {
//           Swal.fire({
//             title: "Error!",
//             text: "Failed to send the message. Please try again later.",
//             icon: "error",
//             confirmButtonText: "Try Again",
//           });
//           setStatus("Failed to send the message. Please try again.");
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-20 pt-24 text-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-serif text-center text-yellow-500 mb-8">
//           Contact Me
//         </h2>

//         deploy

//             {/* Contact Form */}
//             <form
//               ref={form}
//               onSubmit={sendEmail}
//               className="space-y-4 border border-gray-700 rounded-xl p-6 "
//             >
//               <div>
//                 <label
//                   htmlFor="first_name"
//                   className="block text-xl font-medium text-yellow-500"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
                  
//                   id="first_name"
//                   name="first_name"
//                   className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-900 text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="last_name"
//                   className="text-xl font-medium text-yellow-500"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="last_name"
//                   name="last_name"
//                   className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-900 text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="user_email"
//                   className="block text-xl font-medium text-yellow-500"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="user_email"
//                   name="user_email"
//                   className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-900 text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-xl font-medium text-yellow-500"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-900 text-white"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
//               >
//                 Send Message
//               </button>
//             </form>

//             {status && (
//               <p className="mt-4 text-center text-lg text-yellow-500">
//                 {status}
//               </p>
//             )}
//           </div>

//           {/* Lottie Animation */}
//           <div className="w-full md:w-1/2 -mt-5 flex   md:mt-56 justify-center">
            
//                 <img 
//                       src={email}
//                       alt="Profile"
//                       className="w-50 h-50 shadow-lg"
//                       />
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
































































































































































































































































// import React, { useRef, useState } from 'react';
// import { BiLogoGmail } from "react-icons/bi";
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';
// import Lottie from 'lottie-react';
// import lottieAnimation from '../assets/animation/Animation - 1735999337139.json';
// import { FaLocationArrow, FaPhone } from 'react-icons/fa';

// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState(""); // To show success/failure messages

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_jhd42d4', 'template_a8330ws', form.current, {
//         publicKey: 'Q8hAmHnrsQpO9tspF',
//       })
//       .then(
//         () => {
//           // SweetAlert for success
//           Swal.fire({
//             title: 'Success!',
//             text: 'Your message has been sent successfully.',
//             icon: 'success',
//             confirmButtonText: 'Okay',
//           });

//           // Set status message
//           setStatus("Message sent successfully!");
//         },
//         (error) => {
//           // SweetAlert for error
//           Swal.fire({
//             title: 'Error!',
//             text: 'Failed to send the message. Please try again later.',
//             icon: 'error',
//             confirmButtonText: 'Try Again',
//           });

//           // Set status message for error
//           setStatus("Failed to send the message. Please try again.");
//           console.log('FAILED...', error.text);
//         }
//       );
//   };

//   return (
//     <>
//       <section id="contact" className="py-20 pt-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
//             Contact Me
//           </h2>

//           {/* Flex container to position form and Lottie side by side */}
//           <div className="flex justify-between items-start">
//             {/* Contact Info and Form Section */}
//             <div className=" md:w-1/2">
//               {/* Contact Info */}
//                <div className="flex flex-col md:flex-row justify-between items-start  p-6 rounded-lg shadow-md mb-8">
//                 <div>
//                   <h3 className="text-xl font-semibold text-yellow-500">Get in Touch</h3>
//                   <p className="text-gray-300 mt-2">
//                     Feel free to reach out via email or phone, or send me a message using the form below.
//                   </p>
//                 </div>
//                 <div className="mt-4  md:mt-0">
//                   <p className="text-md">
//                     <strong className='text-yellow-500'> Email:</strong> 
//                     <a href="mailto:your-email@example.com" className="text-white hover:underline">
//                           Pionara02@gmail.com
//                     </a>
//                   </p>
//                   <p className="text-md mt-2">
//                     <strong className='text-yellow-500'> Phone: </strong> 
//                     <a href="tel:+1234567890" className="text-white hover:underline">
//                       +1234567890
//                     </a>
//                   </p>
//                   <p className="text-md mt-2">
//                     <strong className='text-yellow-500'>WhatsApp:</strong> 
//                     <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
//                       +1234567890
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <form ref={form} onSubmit={sendEmail} className="space-y-4 border rounded-xl p-6 pb-5 w-full">
//                 <div className="">
//                   <label htmlFor="first_name" className="block text-xl font-medium text-yellow-500">First Name</label>
//                   <input type="text" id="first_name" name="first_name" className="mt-1 block w-full px-4 py-2 border rounded-md" required />
//                 </div>

//                 <div>
//                   <label htmlFor="last_name" className="text-xl font-medium text-yellow-500">Last Name</label>
//                   <input type="text" id="last_name" name="last_name" className="mt-1 block w-full px-3 py-2 border rounded-md" required />
//                 </div>

//                 <div>
//                   <label htmlFor="user_email" className="block text-xl font-medium text-yellow-500">Email</label>
//                   <input type="email" id="user_email" name="user_email" className="mt-1 block w-full px-4 py-2 border rounded-md" required />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-xl font-medium text-yellow-500">Message</label>
//                   <textarea id="message" name="message" className="mt-1 block w-full px-4 py-2 border rounded-md" required></textarea>
//                 </div>

//                 <button type="submit" className="w-full px-4 py-2 btn btn-outline bg-yellow-500 text-white rounded-md mt-6">
//                   Send Message
//                 </button>
//               </form>

//               {/* Status Message */}
//               {status && <p className="mt-4 text-center text-lg text-primary">{status}</p>}
//             </div>

//             {/* Lottie Animation */}
//             <div className="w-full md:w-1/2 mt-8 md:mt-32 ml-20 ">
//               <Lottie animationData={lottieAnimation} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;













import React, { useRef, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import email from '../assets/image/email.svg';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jhd42d4", "template_a8330ws", form.current, {
        publicKey: "Q8hAmHnrsQpO9tspF",
      })
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonText: "Okay",
          });
          setStatus("Message sent successfully!");
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to send the message. Please try again later.",
            icon: "error",
            confirmButtonText: "Try Again",
          });
          setStatus("Failed to send the message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 pt-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-yellow-500 mb-8">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 border border-gray-700 rounded-xl p-6 md:w-1/2"
          >
            <div>
              <label
                htmlFor="first_name"
                className="block text-xl font-medium text-yellow-500"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-900 text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="text-xl font-medium text-yellow-500"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-900 text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-xl font-medium text-yellow-500"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-900 text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xl font-medium text-yellow-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-900 text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-lg text-yellow-500">
              {status}
            </p>
          )}

          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 -mt-5 flex md:mt-56 justify-center">
            <img
              src={email}
              alt="Email Illustration"
              className="w-50 h-50 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;







 






