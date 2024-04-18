import { useState } from "react";

function Contact() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  function validatePhoneNumber(inputPhone: string) {
    const phoneNumberPattern = /^0\d{9}$/;
    return phoneNumberPattern.test(inputPhone.valueOf());
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });

    alert("Form submitted successfully!");
  };

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
  
    // Perform validation for first name and last name when their respective inputs change
    if (id === "firstName" || id === "lastName") {
      const nameInput = document.getElementById(id) as HTMLInputElement;
      if (value.trim() === "") {
        nameInput.setCustomValidity("Please fill out this field.");
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        nameInput.setCustomValidity("Please check your input. Only letters are allowed.");
      } else {
        nameInput.setCustomValidity("");
      }
    }
  
    // Perform phone number validation when the phone input changes
    if (id === "phone") {
      const phoneInput = document.getElementById("phone") as HTMLInputElement;
      if (value === "") {
        phoneInput.setCustomValidity("Please fill out this field.");
      } else if (!validatePhoneNumber(value)) {
        phoneInput.setCustomValidity("Please enter a valid 10-digit phone number");
      } else {
        phoneInput.setCustomValidity("");
      }
    }
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div className="contact_wrapper">
      <div className="contact">
        <form
onSubmit={(e) => {
  e.preventDefault();
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  if (formData.phone === "") {
    phoneInput.setCustomValidity("Phone number is required");
  } else if (!validatePhoneNumber(formData.phone)) {
    phoneInput.setCustomValidity("Please enter a valid 10-digit phone number");
  } else {
    phoneInput.setCustomValidity("");
  }
  if (!phoneInput.reportValidity()) {
    return;
  }
  setTimeout(() => handleSubmit(e), 0); // Delay the form submission
}}
        >
          <div className="form-group row">
            <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
            <input
  type="text"
  className="form-control contact"
  id="firstName" // Updated ID
  placeholder="Ion"
  value={formData.firstName}
  onChange={handleChange}

/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputLastName" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
            <input
  type="text"
  className="form-control contact"
  id="lastName" // Updated ID
  placeholder="Popescu"
  value={formData.lastName}
  onChange={handleChange}

/>
            </div>
          </div>

          <div className="form-group row">
  <label htmlFor="inputPhone" className="col-sm-2 col-form-label">
    Phone Number
  </label>
  <div className="col-sm-10">
  <input
  type="tel"
  className="form-control contact"
  id="phone"
  placeholder="07XXXXXXXX"
  value={formData.phone}
  onChange={handleChange}
/>
  </div>
</div>

          <div className="form-group row">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control contact"
                id="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputMessage" className="col-sm-2 col-form-label">
              Message
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control contact"
                id="message"
                rows={3}
                placeholder="Your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
        {isSubmitted && (
          <p style={{ textAlign: "center" }}>
            <br />
            <br />
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
