import { useState } from "react";
import FormLogin from "../../components/auth/formLogin";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../Redux/features/user/authApiSlice";
import { userSchemaLogin } from "../../Requests/userRequest";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [login, { data, isLoading, isError, error }] = useLoginMutation();

  // validate values
  const validateValues = async () => {
    try {
      await userSchemaLogin.validate(userInput, { abortEarly: false });
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
        await login({
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
    });
    navigate("/new");
  }
  console.log();
  return (
    <div>
      <FormLogin
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
