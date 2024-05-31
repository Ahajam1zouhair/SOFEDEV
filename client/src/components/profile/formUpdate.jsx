/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Button } from "antd";
import { LiaUserEditSolid } from "react-icons/lia";

const FormUpdate = ({
  updateLoading,
  onSubmit,
  setUserInput,
  userInput,
  toggleModal,
  isOpen,
  errors,
}) => {
  console.log(errors);
  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={toggleModal}
        className="w-32 py-2 ml-2 shadow-sm rounded-md bg-indigo-600 text-white mt-4 flex items-center justify-center font-medium text-xs md:text-sm"
      >
        <LiaUserEditSolid className="w-7 h-7 mr-1 text-white" />
        Edit Profile
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
                  Update Profile
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
                <form>
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-900">
                      Name:
                    </label>
                    <input
                      type="text"
                      className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                        errors.name && "border-red-500"
                      } `}
                      value={userInput.name}
                      onChange={(e) =>
                        setUserInput({ ...userInput, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <div className="font-medium text-red-400">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-900">
                      Email:
                    </label>
                    <input
                      type="text"
                      className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                        errors.email && "border-red-500"
                      } `}
                      value={userInput.email}
                      onChange={(e) =>
                        setUserInput({ ...userInput, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <div className="font-medium text-red-400">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    loading={updateLoading}
                    onClick={onSubmit}
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

FormUpdate.propTypes = {
  updateLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default FormUpdate;
