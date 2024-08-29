/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Form from "../../Component/form/Form";
import Input from "../../Component/form/Input";
import { FieldValues } from "react-hook-form";
import SelectInput from "../../Component/form/SelectInput";

import { IRespone } from "../../redux/InterfaceForRedux/apiRespone.interface";
import { toast } from "sonner";
import { useCreateAdminMutation } from "../../redux/Api/createUserApi/creatUserApi";

const CreateAdmin = () => {
  const [createAdmin] = useCreateAdminMutation();
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);

    const { password, ...adminData } = data;

    const newObject = {
      password: password,
      admin: adminData,
    };
    const res = (await createAdmin(newObject)) as IRespone<any>;
    console.log(res);
    if (res?.data) {
      toast.success(res.data.message);
    }
    if (res?.error) {
      toast.success(res.error.data.message);
    }
  };

  return (
    <>
      {" "}
      <div className="bg-slate-950 w-full box-border h-32 items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div className="text-3xl font-bold">Create Admin</div>
        </div>
      </div>{" "}
      <div className=" container mx-auto bg-base-100 mt-10 w-full  ">
        <div className="">
          <Form onFormSubmit={onFormSubmit}>
            <Input
              type="text"
              errorMsg="First Name is Required."
              label="First Name"
              name="name.firstName"
            ></Input>
            <Input
              type="text"
              errorMsg={false}
              label="Middle Name"
              name="name.middleName"
            ></Input>
            <Input
              type="text"
              errorMsg={"Last Name is Required"}
              label="Last Name"
              name="name.lastName"
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
            <SelectInput
              label="Gender"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
              errorMsg="Gender is required"
              name="gender"
            ></SelectInput>
            <button className="btn w-full btn-sm mt-5" type="submit">
              Comfirm
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateAdmin;
