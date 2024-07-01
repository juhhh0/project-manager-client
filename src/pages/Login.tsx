import { useMutation } from "@apollo/client";
import React from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/ui/Input";
import CustomButton from "../components/ui/Button";
import { LOGIN_MUTATION } from "../services/mutations";
import ErrorMessage from "../components/ui/ErrorMessage";

const Login: React.FC = () => {
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const { data } = await login({
      variables: {
        user: {
          email: form.email.value,
          password: form.password.value,
        },
      },
    });

    if (
      signIn({
        auth: {
          token: data.login.token,
          type: "Bearer",
        },
        userState: {
          id: data.login.id,
          name: data.login.name,
          email: data.login.email,
        },
      })
    ) {
      navigate("/");
    } else {
      console.log(error);
    }
  };
  return (
    <form
      action=""
      onSubmit={submit}
      className="flex flex-col mx-auto w-full max-w-sm"
    >
      <CustomInput name="email" label="Email" type="email" className="mb-3" />
      <CustomInput name="password" label="Password" type="password" />
      <CustomButton
        label="Login"
        disabled={loading}
        type="submit"
        className="mt-3"
      />
      <ErrorMessage error={error} />
    </form>
  );
};

export default Login;
