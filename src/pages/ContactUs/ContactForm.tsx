import Form from "../../Component/form/Form";
import { FieldValues } from "react-hook-form";
import Input from "../../Component/form/Input";
import TextAria from "../../Component/form/TextAria";

const ContactForm = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="w-full">
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
          name="message"
          errorMsg="Message Requierd"
          label="Message"
        ></TextAria>
        <button className="btn btn-sm mt-5 hover:text-white hover:bg-slate-900 bg-slate-950 border-none">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default ContactForm;
