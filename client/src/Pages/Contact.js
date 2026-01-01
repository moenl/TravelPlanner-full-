// import React, { useState } from "react";
// import "../Styles/Contact.css";
// const Contact = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const fieldName = e.target.name;
//     const fieldValue = e.target.value;

//     setFormData({
//       ...formData,
//       [fieldName]: fieldValue
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message submitted!\n\n" +
//       "Name: " + formData.name +
//       "\nEmail: " + formData.email +
//       "\nMessage: " + formData.message
//     );

//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Contact Us</h2>

//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>

//         <div className="mb-3">
//           <label className="form-label">Your Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Your Email</label>
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Message</label>
//           <textarea
//             className="form-control"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100">
//           Send Message
//         </button>

//       </form>
//     </div>
//   );
// };

// export default Contact;




import React, { useState } from "react";
import axios from "axios";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);

      alert("Message sent successfully!");

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>

        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>

      </form>
    </div>
  );
};

export default Contact;
