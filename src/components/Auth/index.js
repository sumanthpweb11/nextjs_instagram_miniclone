import useForm from "../../hooks/useForm";
import insta from "../../../public/assets/images/insta.png";
import Image from "next/image";
import { useMemo } from "react";
import { AiFillFacebook } from "react-icons/ai";

const Auth = () => {
  const { form, onChangeHandler } = useForm({
    email: "",
    password: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  const isDisabled = useMemo(() => {
    return !Object.values(form).every((val) => !!val);
  }, [form]);

  return (
    <div className=" bg-gray-50 w-screen h-screen flex items-center justify-center  ">
      <div className="auth-container  ">
        {/* ITEM-1 IMAGE CONTAINER */}
        <div className="item-1  object-contain">
          <Image
            alt="Picture of the author"
            src={insta}
            className=" h-full    "
          />
        </div>

        {/* ITEM-2 FORM and BOTTOM CONTAINERS */}
        <div className=" item-2  bg-gray-50  ">
          {/* DIV-1 FORM INPUTS */}
          <div className="div-1 bg-white border">
            <form
              onSubmit={submitHandler}
              className="flex flex-col items-center space-y-5"
            >
              <h1 className="tracking-wider ">Instagram</h1>
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChangeHandler}
                value={form.email}
                className=" bg-gray-100 border hover:bg-transparent focus:bg-transparent w-full placeholder:text-sm py-1 px-2  outline-none rounded focus:border-gray-400 transition"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                id="password"
                onChange={onChangeHandler}
                value={form.password}
                className="  bg-gray-100 border hover:bg-transparent focus:bg-transparent w-full placeholder:text-sm py-1 px-2  outline-none rounded focus:border-gray-400 transition"
                placeholder="Password"
              />
              <button
                disabled={isDisabled}
                type="submit"
                className="bg-[#0095F6] py-2 px-6 text-white active:scale-95 transform transition w-full rounded hover:bg-[#047ccc] disabled:bg-opacity-40 disabled:scale-100 text font-semibold "
              >
                Log In
              </button>
            </form>

            <div className="w-full flex items-center justify-center my-5">
              <div className="h-[0.5px] w-full bg-slate-300" />
              <div className="text-gray-600 text-sm font-semibold w-full flex items-center justify-center ">
                <span>OR</span>
              </div>
              <div className="h-[0.5px] w-full bg-slate-300" />
            </div>

            <div className="flex items-center justify-center gap-1">
              <AiFillFacebook color="#385185" />
              <span className="text-[#385185] font-semibold text-sm ">
                Log in with Facebook
              </span>
            </div>

            <div>
              <span className="w-full mt-5  text-xs text-center  flex items-center justify-center gap-1">
                Forgot password?
              </span>
            </div>
          </div>
          {/* DIV-2 DONT HAVE AN ACCOUNT ? */}
          <div className="div-2 border bg-white flex items-center justify-center">
            <p>
              Don't have an account? <span>Sign up</span>
            </p>
          </div>
        </div>

        {/** */}
      </div>
    </div>
  );
};

export default Auth;
