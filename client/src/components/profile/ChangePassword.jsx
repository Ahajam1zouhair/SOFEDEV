/* eslint-disable react/prop-types */
import { Button } from "antd";
import { MdOutlinePassword } from "react-icons/md";
import { useEffect, useState } from "react";
import { useChangePasswordMutation } from "../../Redux/features/user/authApiSlice";
import { schemaChangePassword } from "../../Requests/userRequest";

const ChangePassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState({
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const [errors, setErrors] = useState({});

  // localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user?.id;

  const [
    changePassword,
    { isLoading: updateLoading, isError, error, isSuccess },
  ] = useChangePasswordMutation();

  // validate values
  const validateValues = async () => {
    try {
      await schemaChangePassword.validate(passwordInput, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      const newErrors = error.inner.reduce((acc, cur) => {
        acc[cur.path] = cur.message;
        return acc;
      }, {});
      setErrors(newErrors);
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const isValid = await validateValues();
      if (isValid) {
        await changePassword({
          id,
          data: {
            password: passwordInput.old_password,
            new_password: passwordInput.new_password,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Toggle Modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess]);
  console.log();
  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={toggleModal}
        className="w-40  ml-2 shadow-sm rounded-md bg-indigo-600 text-white mt-4 flex items-center justify-center font-medium text-xs md:text-sm"
      >
        <MdOutlinePassword className="w-7 h-7 mr-1 text-white" />
        Change Password
      </button>
      {/* Main modal */}
      {isOpen && (
        <div
          id="static-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen overflow-y-auto overflow-x-hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // To simulate backdrop
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Change Password
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={onSubmit}>
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-900">
                      Old Password:
                    </label>
                    <input
                      type="password"
                      className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                        errors.old_password || (isError && "border-red-500")
                      } `}
                      value={passwordInput.old_password}
                      onChange={(e) =>
                        setPasswordInput({
                          ...passwordInput,
                          old_password: e.target.value,
                        })
                      }
                    />
                    {errors.old_password && (
                      <div className="font-medium text-red-400">
                        {errors.old_password}
                      </div>
                    )}
                    {isError && (
                      <div className="font-medium text-red-400">
                        {error.data.error}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-900">
                      New Password:
                    </label>
                    <input
                      type="password"
                      className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                        errors.new_password && "border-red-500"
                      } `}
                      value={passwordInput.new_password}
                      onChange={(e) =>
                        setPasswordInput({
                          ...passwordInput,
                          new_password: e.target.value,
                        })
                      }
                    />
                    {errors.new_password && (
                      <div className="font-medium text-red-400">
                        {errors.new_password}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-900">
                      Confirm New Password:
                    </label>
                    <input
                      type="password"
                      className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                        errors.confirm_new_password && "border-red-500"
                      } `}
                      value={passwordInput.confirm_new_password}
                      onChange={(e) =>
                        setPasswordInput({
                          ...passwordInput,
                          confirm_new_password: e.target.value,
                        })
                      }
                    />
                    {errors.confirm_new_password && (
                      <div className="font-medium text-red-400">
                        {errors.confirm_new_password}
                      </div>
                    )}
                  </div>
                  <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    loading={updateLoading}
                    className="w-full py-3 mt-3 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 ring-offset-2"
                  >
                    Save
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
