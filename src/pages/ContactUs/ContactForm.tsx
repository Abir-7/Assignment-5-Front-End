import React from "react";
import Form from "../../Component/form/Form";
import { FieldValues } from "react-hook-form";
import Input from "../../Component/form/Input";
import TextAria from "../../Component/form/TextAria";

const ContactForm = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <Form onFormSubmit={onFormSubmit}>
        <Input
          name="name"
          errorMsg="Name Requierd"
          label="Name"
          type="text"
        ></Input>
        <Input
          name="email"
          errorMsg="Email Requierd"
          label="Email"
          type="email"
        ></Input>
        <Input
          name="subject"
          errorMsg="Subject Requierd"
          label="Subject"
          type="text"
        ></Input>
        <TextAria
          name="subject"
          errorMsg="Subject Requierd"
          label="Subject"
        ></TextAria>
        <button className="btn btn-sm">Submit</button>
      </Form>
    </div>
  );
};

export default ContactForm;
