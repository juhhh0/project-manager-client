import { gql, useMutation } from "@apollo/client";
import React from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/ui/Input";
import CustomButton from "../components/ui/Button";

const LOGIN_MUTATION = gql`
  mutation Login($user: LoginInput!) {
    login(user: $user) {
      token
      name
      id
      email
    }
  }
`;

export default function Login() {
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
    <form action="" onSubmit={submit} className="flex flex-col mx-auto w-full max-w-sm">
      <CustomInput name="email" label="Email" type="email" className="mb-3" />
      <CustomInput name="password" label="Password" type="password" />
      <CustomButton label="Login" disabled={loading} type="submit" className="mt-3" />
      {error && <p>{error.message}</p>}
    </form>
  );
}
