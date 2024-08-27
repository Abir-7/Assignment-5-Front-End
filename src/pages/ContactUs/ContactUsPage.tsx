import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const ContactUsPage = () => {
  return (
    <div className=" container mx-auto gap-10 my-5 grid  grid-cols-1 md:grid-cols-2 justify-items-center ">
      <ContactForm></ContactForm>
      <ContactDetails></ContactDetails>
    </div>
  );
};

export default ContactUsPage;
