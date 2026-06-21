// "use client";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import axios from "axios";
// import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
// import {
//   FaLinkedin,
//   FaWhatsapp,
//   FaInstagram,
//   FaFacebook,
// } from "react-icons/fa";
// import { toast } from "react-hot-toast";
// import Loader from "@/components/Loader/Loader";

// const Contact = () => {
//   const [data, setData] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (!data.fname || !data.lname || !data.email || !data.message) {
//         toast.error("Please fill all fields");
//         return;
//       }
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/enquiry/`,
//         {
//           first_name: data.fname,
//           last_name: data.lname,
//           email: data.email,
//           phone_number: data.phone,
//           message: data.message,
//         }
//       );

//       if (response.data.status === "success") {
//         toast.success("Message sent successfully");
//         setData({ fname: "", lname: "", email: "", phone: "", message: "" });
//       } else {
//         toast.error(response.data.message || "Failed to send message");
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="px-8 md:px-16 flex flex-col md:flex-row py-20 gap-5">
//       <div className="w-full md:w-[45%] p-8 border rounded-lg flex flex-col">
//         <h2 className="text-2xl md:text-3xl mb-4">Contact Information</h2>
//         <p className=" text-gray-600 mb-6">
//           We're here to assist you. Fill out the form below, and we'll get back
//           to you as soon as possible.
//         </p>

//         <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
//           <HiPhone className="text-2xl text-growth-green" />
//           <div className="ml-4">
//             <a href="callto:+971567517147" className="text-sm font-medium">
//               +971 56 7517147
//             </a>
//           </div>
//         </div>

//         <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
//           <HiMail className="text-2xl text-growth-green" />
//           <div className="ml-4">
//             <a href="mailto:info@zahads.com" className="text-sm font-medium">
//               info@zahads.com
//             </a>
//           </div>
//         </div>

//         <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
//           <HiLocationMarker className="text-2xl text-growth-green" />
//           <div className="ml-4">
//             <p className="text-sm font-medium">
//               Office 751, Tamani Arts Offices, Business Bay, Dubai
//             </p>
//           </div>
//         </div>
//         <div className="mt-auto flex justify-start space-x-4">
//           <a
//             href="https://www.linkedin.com/company/zahads-chartered-accountants/"
//             className="border rounded-full p-2 border-black"
//           >
//             <FaLinkedin className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
//           </a>
//           <a
//             href="https://wa.me/971501234567"
//             className="border rounded-full p-2 border-black"
//           >
//             <FaWhatsapp className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
//           </a>
//           <a
//             href="https://www.instagram.com/zahads_official/"
//             className="border rounded-full p-2 border-black"
//           >
//             <FaInstagram className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
//           </a>
//           <a
//             href="https://www.facebook.com/people/Zahads/61577095744817/#"
//             className="border rounded-full p-2 border-black"
//           >
//             <FaFacebook className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
//           </a>
//         </div>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="w-full md:w-[55%] p-8 rounded-lg border border-t-8 border-t-ambition-gold"
//       >
//         <div className="grid grid-cols-1 gap-6">
//           {/* First Name Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>
//             <Input
//               placeholder="Enter your first name"
//               type="text"
//               name="fname"
//               value={data.fname}
//               onChange={handleChange}
//               className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
//             />
//           </div>

//           {/* Last Name Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <Input
//               placeholder="Enter your last name"
//               type="text"
//               name="lname"
//               value={data.lname}
//               onChange={handleChange}
//               className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
//             />
//           </div>

//           {/* Email Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <Input
//               placeholder="Enter your email"
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//               className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
//             />
//           </div>

//           {/* Phone Input - Add after Email Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <Input
//               placeholder="Enter your phone numberrr"
//               type="tel"
//               name="phone"
//               value={data.phone}
//               onChange={handleChange}
//               className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
//             />
//           </div>

//           {/* Message Textarea */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <Textarea
//               placeholder="Write your message"
//               name="message"
//               value={data.message}
//               onChange={handleChange}
//               className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
//             />
//           </div>

//           {/* Submit Button */}
//           <Button
//             disabled={loading}
//             type="submit"
//             className="w-fit bg-ambition-gold text-growth-green rounded-none mt-3 py-2 flex items-center justify-center hover:text-white"
//           >
//             {loading ? (
//               <Loader size={25} color="#fff" />
//             ) : (
//               <div className="flex items-center">
//                 Submit
//                 <svg
//                   className="ml-2 h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </div>
//             )}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;



"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Loader from "@/components/Loader/Loader";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!data.fname || !data.lname || !data.email || !data.message) {
      toast.error("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyUaccneyaxSw_P-lXZlvMCvwUyrvR1Ds5jd3k9SAmQEUSzcbhCU86QR7QH5Q4FJMc/exec",
        {
          method: "POST",
          mode: "no-cors", // prevent CORS preflight issue
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: data.fname,
            last_name: data.lname,
            email: data.email,
            phone_number: data.phone,
            message: data.message,
          }),
        }
      );

      toast.success("Message sent successfully ✅");
      setData({ fname: "", lname: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 md:px-16 flex flex-col md:flex-row py-20 gap-5">
      {/* Left Info Section */}
      <div className="w-full md:w-[45%] p-8 border rounded-lg flex flex-col">
        <h2 className="text-2xl md:text-3xl mb-4">Contact Information</h2>
        <p className=" text-gray-600 mb-6">
          We're here to assist you. Fill out the form below, and we'll get back
          to you as soon as possible.
        </p>

        <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
          <HiPhone className="text-2xl text-growth-green" />
          <div className="ml-4">
            <a href="callto:+971585887546" className="text-sm font-medium">
              +971 58 588 7546
            </a>
          </div>
        </div>

        <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
          <HiMail className="text-2xl text-growth-green" />
          <div className="ml-4">
            <a href="mailto:info@zahads.com" className="text-sm font-medium">
              info@zahads.com
            </a>
          </div>
        </div>

        <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
          <HiLocationMarker className="text-2xl text-growth-green" />
          <div className="ml-4">
            <p className="text-sm font-medium">
              Office 1834, Tamani Arts Offices, Al Asayel Street, Business Bay, Dubai, UAE.
            </p>
          </div>
        </div>

        <div className="mt-auto flex justify-start space-x-4">
          <a
            href="https://www.linkedin.com/company/zahads-chartered-accountants/"
            className="border rounded-full p-2 border-black"
          >
            <FaLinkedin className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          </a>
          <a href="https://wa.me/971501234567" className="border rounded-full p-2 border-black">
            <FaWhatsapp className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/zahads_official/" className="border rounded-full p-2 border-black">
            <FaInstagram className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/people/Zahads/61577095744817/#" className="border rounded-full p-2 border-black">
            <FaFacebook className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[55%] p-8 rounded-lg border border-t-8 border-t-ambition-gold"
      >
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <Input
              placeholder="Enter your first name"
              type="text"
              name="fname"
              value={data.fname}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <Input
              placeholder="Enter your last name"
              type="text"
              name="lname"
              value={data.lname}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              placeholder="Enter your phone number"
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              placeholder="Write your message"
              name="message"
              value={data.message}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="w-fit bg-ambition-gold text-growth-green rounded-none mt-3 py-2 flex items-center justify-center hover:text-white"
          >
            {loading ? (
              <Loader size={25} color="#fff" />
            ) : (
              <div className="flex items-center">
                Submit
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
