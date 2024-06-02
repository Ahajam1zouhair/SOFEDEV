/* eslint-disable react/prop-types */

import { Button } from "antd";

/* eslint-disable react/no-unknown-property */
export default function FormLogin({
  setUserInput,
  userInput,
  onSubmit,
  isLoading,
  errors,
  isError,
  error,
}) {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Sign up
            </h3>
            <p className="">
              Already have an account?
              <a
                href="javascript:void(0)"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                errors.email || (isError && "border-red-500")
              } `}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
            />
            {errors.email && (
              <div className="font-medium text-red-400">{errors.email}</div>
            )}
            {isError && (
              <div className="font-medium text-red-400">
                {error.data.message}
              </div>
            )}
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                errors.password || (isError && "border-red-500")
              } `}
              onChange={(e) =>
                setUserInput({ ...userInput, password: e.target.value })
              }
            />
            {errors.password && (
              <div className="font-medium text-red-400">{errors.password}</div>
            )}
            {isError && (
              <div className="font-medium text-red-400">
                {error.data.message}
              </div>
            )}
          </div>
          <Button
            loading={isLoading}
            className="w-full h-12 px-4 text-white font-medium bg-indigo-600  active:bg-indigo-600 rounded-lg duration-150 "
            htmlType="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}
