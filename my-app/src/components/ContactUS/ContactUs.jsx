import React, { useState, useRef } from "react";
import "./contactus.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "", // Add phone number field
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(""); // Add phone number error state

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;

    if (formData.name.trim() === "") {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (formData.email.trim() === "") {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (formData.phoneNumber.trim() === "") { // Validate phone number
      setPhoneNumberError("Phone number is required");
      valid = false;
    } else {
      setPhoneNumberError("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        // "https://script.google.com/macros/s/AKfycbxACl8jeMx5zgnjLHfnvpYYSK9jrizeGmTq0jbunbhWhLO_66aiXHRPFz7ZJOWwcbjZ/exec",
        "https://script.google.com/macros/s/AKfycby3D_wFInpH16t2VYyYy1cGQhsuhSST2op_XIGeqLIhfdqXXeKViTiejD33GsNDwo3g/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "", // Clear phone number field
          subject: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div div className="Container">
      <div className="Wrapper">

        <form
          ref={formRef}
          name="form"
          method="post"
          onSubmit={handleSubmit}
          className="ContactForm"
        >
          <h2 className="Titlt fst-italic">Contact Us</h2>
          <label htmlFor="name" className="labl">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="ContactInput"
          />
          {nameError && <p className="error">{nameError}</p>}
          <br />
          <br />

          <label htmlFor="email" className="labl">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="ContactInput"
          />
          {emailError && <p className="error">{emailError}</p>}
          <br />
          <br />

          <label htmlFor="phoneNumber" className="labl">Phone Number:</label> {/* Add phone number label */}
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="ContactInput"
          />
          {phoneNumberError && <p className="error">{phoneNumberError}</p>} {/* Display phone number error */}
          <br />
          <br />

          <label htmlFor="subject" className="labl">Message:</label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            rows="4"
            cols="50"
            required
            className="ContactInput"
          ></input>
          <br />
          <br />

          <div
            className="spinner"
            style={{ display: isSubmitting ? "inline-block" : "none" }}
          ></div>

          <input type="submit" value="Submit" className="ContactButton" />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
