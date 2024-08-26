import { FieldValues } from "react-hook-form";
import Form from "../../Component/form/Form";
import Input from "../../Component/form/Input";
import img from "../../assets/image/login.jpg";
import { useLoginMutation } from "../../redux/Api/authApi/authApi";
import { IRespone } from "../../redux/InterfaceForRedux/apiRespone.interface";
import { IAuthData } from "../../redux/InterfaceForRedux/authApi.interface";
import { toast } from "sonner";
const LoginPage = () => {
  const [userLogin] = useLoginMutation();
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
    const res = (await userLogin(data)) as IRespone<IAuthData>;

    if (res.data?.success) {
      toast.success(res.data.message);
    } else {
      toast.success(res.error?.data.message);
    }
  };
  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-content flex-col ">
        <div className="text-7xl my-8 text-white font-bold">Login</div>
        <div className="card bg-base-100 sm:w-96 md:w-[500px]  lg:w-[700px] shrink-0 shadow-2xl">
          <div className="card-body ">
            <Form onFormSubmit={onFormSubmit}>
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

              <button
                className="btn btn-sm w-full bg-slate-950 text-white mt-5"
                type="submit"
              >
                Comfirm
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
