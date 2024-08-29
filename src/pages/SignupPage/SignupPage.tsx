/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "../../Component/form/Form";
import Input from "../../Component/form/Input";
import { FieldValues } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/Api/createUserApi/creatUserApi";
import { IRespone } from "../../redux/InterfaceForRedux/apiRespone.interface";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/image/login.jpg";
const SignupPage = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();
  const onFormSubmit = async (data: FieldValues) => {
    const { password, ...remaindata } = data;

    const res = (await createUser({
      password,
      customer: {
        ...remaindata,
        phone: Number(remaindata.phone),
        email: data?.email?.toLowerCase(),
      },
    })) as IRespone<any>;

    if (res?.data) {
      toast.success(res.data.message);
      navigate("/login");
    }
    if (res?.error) {
      toast.success(res.error.data.message);
    }
  };

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-content flex-col ">
        <div className="text-7xl my-8 text-white font-bold">Signup</div>
        <div className="card bg-base-100 sm:w-96 md:w-[500px]  lg:w-[700px] shrink-0 shadow-2xl">
          <div className="card-body ">
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
              <button className="btn btn-sm mt-4 w-full" type="submit">
                Create Account
              </button>
            </Form>
            <div className="text-sm">
              Already have account?{" "}
              <Link to="/login" className="hover:underline underline-offset-2">
                Click here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
