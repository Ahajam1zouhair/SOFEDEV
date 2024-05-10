import { useState } from "react";
import FormLogin from "../../components/auth/formLogin";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../Redux/features/user/authApiSlice";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [login, { data, isLoading, isError, error }] = useLoginMutation();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({
        email: userInput.email,
        password: userInput.password,
      });
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
      />
    </div>
  );
}
