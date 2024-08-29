import { FieldValues } from "react-hook-form";
import Form from "../../Component/form/Form";
import Input from "../../Component/form/Input";
import img from "../../assets/image/login.jpg";
import { useLoginMutation } from "../../redux/Api/authApi/authApi";
import { IRespone } from "../../redux/InterfaceForRedux/apiRespone.interface";
import { IAuthData } from "../../redux/InterfaceForRedux/authApi.interface";
import { toast } from "sonner";
import { decodeToken } from "../../utils/decodeToken";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/userSlice/authSlice";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userLogin] = useLoginMutation();
  const onFormSubmit = async (data: FieldValues) => {
    const res = (await userLogin(data)) as IRespone<IAuthData>;

    if (res.data?.success) {
      toast.success(res.data.message);
      const tokenData = decodeToken(res.data.data.token);

      dispatch(setUser({ user: tokenData, token: res.data.data.token }));
      navigate("/");
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
            <div className="text-sm">
              Don't have account?{" "}
              <Link to="/signup" className="hover:underline underline-offset-2">
                Click here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
