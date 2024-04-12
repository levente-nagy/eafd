import  { useState } from 'react';


function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  function validatePhoneNumber(inputPhone: string) {
    var phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(inputPhone.valueOf());
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);

    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });

    alert('Form submitted successfully!');
  };

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  return (
    <div className="contact_wrapper">
      <div className="contact">
            <form onSubmit={(e) => {
  e.preventDefault();
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  if (!validatePhoneNumber(formData.phone)) {
    phoneInput.setCustomValidity('Please enter a valid 10-digit phone number');
    phoneInput.reportValidity();
  } else {
    phoneInput.setCustomValidity('');
    handleSubmit(e);
  }
}}>

        <div className="form-group row">
          <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control contact" id="firstName" placeholder="Ion" value={formData.firstName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control contact" id="lastName" placeholder="Popescu" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Phone Number</label>
          <div className="col-sm-10">
            <input type="tel" className="form-control contact" id="phone" placeholder="07XXXXXXXX" value={formData.phone} onChange={handleChange} required onFocus={(e) => {
              const target = e.target as HTMLInputElement;
              if (!validatePhoneNumber(target.value)) {
                target.setCustomValidity('Please enter a valid 10-digit phone number');
                target.reportValidity();
              } else {
                target.setCustomValidity('');
              }
            }} />
          </div>
        </div>


        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control contact" id="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputMessage" className="col-sm-2 col-form-label">Message</label>
          <div className="col-sm-10">
            <textarea className="form-control contact" id="message" rows={3} placeholder="Your message here" value={formData.message} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-success"
        >Submit</button>
      </form>
      {isSubmitted && <p style={{ textAlign: 'center' }}><br /><br /></p>}
    </div>
    </div>
  );
}

export default Contact;
