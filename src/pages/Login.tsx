import { gql, useMutation } from "@apollo/client";
import React from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation Login($user: LoginInput!) {
    login(user: $user) {
      token
      name
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
    <form action="" onSubmit={submit} className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <button disabled={loading} type="submit">
        Login
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
}
