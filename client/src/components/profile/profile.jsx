import "./styleUpload.css";
import {
  useDeletePictureMutation,
  useProfileImageMutation,
  useProfileUserMutation,
  useUpdateProfileMutation,
} from "../../Redux/features/user/authApiSlice";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import FormUpdate from "./formUpdate";
import { useNavigate } from "react-router-dom";
import { userSchemUpdate } from "../../Requests/userRequest";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const [file, setFile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [userInput, setUserInput] = useState({
    email: "",
    name: "",
  });
  // localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user?.id;
  // API
  const [
    image,
    { isSuccess: imageSuccess, data: imageData, isLoading: imageLoading },
  ] = useProfileImageMutation();
  const [profileUser, { data }] = useProfileUserMutation();
  const [
    deletePicture,
    { isLoading: deletePictureLoading, isSuccess: deletePictureSuccess },
  ] = useDeletePictureMutation();
  const [updateProfile, { isLoading: updateLoading, isSuccess }] =
    useUpdateProfileMutation();

  // navigate
  const navigate = useNavigate();

  // MODELS
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // upddate
  useEffect(() => {
    if (id) {
      profileUser(id);
    }
  }, [profileUser, id]);

  useEffect(() => {
    if (data) {
      // setName(data.name);
      // setEmail(data.email);
      setUserInput({
        name: data.name,
        email: data.email,
      });
      setFile(data.image_profile?.url);
      user.url = data.image_profile?.url;
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [data]);

  useEffect(() => {
    if (imageSuccess || deletePictureSuccess) {
      const updatedUrl = imageData?.url;
      if (updatedUrl) {
        user.url = updatedUrl;
        localStorage.setItem("user", JSON.stringify(user));
      }
      setFile("");
      if (id) {
        profileUser(id);
      }
    }
  }, [imageSuccess, profileUser, id, deletePictureSuccess]);

  // function upload Image
  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("photo", selectedFile);
        await image({ id, image: formData });
        setFile("");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.warn("No file selected.");
    }
  };
  // function delete Image
  const handleDeletePicture = async () => {
    try {
      await deletePicture(id);
      setFile("");
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  // validate values
  const validateValues = async () => {
    try {
      await userSchemUpdate.validate(userInput, { abortEarly: false });
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
  // function Update Profile
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const isValid = await validateValues();
      if (isValid) {
        await updateProfile({
          id,
          data: { name: userInput.name, email: userInput.email },
        });
        user.name = userInput.name;
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
      navigate("/profile");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="p-12">
      <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {imageLoading || deletePictureLoading ? (
            <Loading />
          ) : (
            <div className="w-20 h-20 md:w-36 md:h-36 bg-indigo-100 mx-auto rounded-full shadow-xl text-indigo-500">
              <img
                src={file}
                className="rounded-full w-20 h-20 md:w-36 md:h-36"
                alt="Profile"
              />
            </div>
          )}
          <div className="flex">
            <button className="container-btn-file relative flex items-center bg-blue-700 text-white   border-none py-4 px-2 rounded-md overflow-hidden  shadow-md transition-all duration-250 md:w-1/2 h-1/3 mt-7 mr-4 md:mr-7">
              <IoMdCloudUpload className="text-white w-7 h-7 mr-1" />
              New Profile Picture
              <input
                className="file absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                type="file"
                id="file"
                placeholder="Update Profile"
                onChange={handleChange}
              />
              <div className="container-btn-file-hover absolute inset-0 w-0 bg-blue-400 rounded-md z-[-1] transition-all duration-350"></div>
            </button>
            <button
              className="container-btn-file relative flex items-center bg-red-700 text-white font-medium text-xs md:text-sm border-none py-4 px-1 rounded-md overflow-hidden  shadow-md transition-all duration-250 md:w-1/2 h-1/3 mt-7"
              onClick={handleDeletePicture}
            >
              <MdDeleteForever className="w-7 h-7 mr-1" />
              Remove Current Picture
              <div className="container-btn-file-hover absolute inset-0 w-0 bg-red-400 rounded-md z-[-1] transition-all duration-350"></div>
            </button>
          </div>
        </div>
        <div className="md:ml-20 md:mt-20">
          <div className="">
            <span className="text-gray-700 font-bold">Name :</span>
            <span className="text-gray-500 font-medium ml-2">{userInput.name}</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700  font-bold">Email : </span>
            <span className="text-gray-500 font-medium  ml-2">{userInput.email}</span>
          </div>
          <div className="flex mt-8">
            <FormUpdate
              data={data}
              onSubmit={onSubmit}
              updateLoading={updateLoading}
              setUserInput={setUserInput}
              userInput={userInput}
              isSuccess={isSuccess}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggleModal={toggleModal}
              errors={errors}
            />
            <ChangePassword
              data={data}
              onSubmit={onSubmit}
              updateLoading={updateLoading}
              setUserInput={setUserInput}
              userInput={userInput}
              isSuccess={isSuccess}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggleModal={toggleModal}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
