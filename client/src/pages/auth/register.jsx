import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../Redux/features/user/authApiSlice";
import FormRegister from "../../components/auth/formRegister";
import { userSchemaRegaiste } from "../../Requests/userRequest";

export default function Register() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [register, { data, isLoading, isError, error }] = useRegisterMutation();

  // validate values
  const validateValues = async () => {
    try {
      await userSchemaRegaiste.validate(userInput, { abortEarly: false });
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
        await register({
          name: userInput.name,
          email: userInput.email,
          password: userInput.password,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (data) {
    const user = JSON.stringify(data);
    console.log(user);
    localStorage.setItem("user", user);
    setUserInput({
      name: "",
      email: "",
      password: "",
    });
    navigate("/new");
  }

  return (
    <div>
      <FormRegister
        setUserInput={setUserInput}
        userInput={userInput}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isError={isError}
        error={error}
        errors={errors}
      />
    </div>
  );
}
