/* eslint-disable react/prop-types */
import { Button } from "antd";
import { Link } from "react-router-dom";
export default function FormRegister({
  setUserInput,
  userInput,
  onSubmit,
  isLoading,
  errors,
  error,
  isError,
}) {
  return (
    <main className="w-full flex">
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
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
              <Link to="/login" 
               
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                  errors.name && "border-red-500"
                } `}
                onChange={(e) =>
                  setUserInput({ ...userInput, name: e.target.value })
                }
              />
              {errors.name && (
                <div className="font-medium text-red-400">{errors.name}</div>
              )}
            </div>
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
                  errors.password && "border-red-500"
                } `}
                onChange={(e) =>
                  setUserInput({ ...userInput, password: e.target.value })
                }
              />
              {errors.password && (
                <div className="font-medium text-red-400">
                  {errors.password}
                </div>
              )}
            </div>
            <Button
              style={{ width: "200px", height: "50px" }}
              htmlType="submit"
              type="primary"
              size="large"
              loading={isLoading}
            >
              Create account
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
