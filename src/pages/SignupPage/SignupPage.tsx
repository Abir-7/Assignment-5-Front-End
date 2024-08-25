import React from "react";
import Form from "../../Component/form/Form";
import Input from "../../Component/form/Input";
import { FieldValues } from "react-hook-form";

const SignupPage = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <Form onFormSubmit={onFormSubmit}>
              <Input
                type="text"
                errorMsg="Name is Required."
                label="Name"
                name="name"
              ></Input>
              <Input
                type="text"
                errorMsg="Email is Required."
                label="Email"
                name="email"
              ></Input>
              <Input
                type="password"
                errorMsg="Password is Required."
                label="Password"
                name="password"
              ></Input>
              <Input
                errorMsg="Phone is Required."
                label="Phone"
                name="phone"
                type="number"
              ></Input>
              <Input
                errorMsg="Address is Required."
                label="Address"
                name="address"
                type="text"
              ></Input>
              <button className="btn" type="submit">
                Comfirm
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
