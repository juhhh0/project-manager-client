import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";

const SIGNUP_MUTATION = gql`
  mutation Signup($user: SignupInput!) {
    signup(user: $user) {
      id
      email
      name
    }
  }
`;

export default function Signup() {
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);
  const [succes, setSuccess] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    await signup({
      variables: {
        user: {
          email: form.email.value,
          name: form.username.value,
          password: form.password.value,
        },
      },
    });

    if (!error) {
      setSuccess(true);
    }
  };

  if (succes)
    return (
      <p>
        Success! You can now <Link to="/login">login</Link> to your account
      </p>
    );

  return (
    <form action="" onSubmit={submit} className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <button disabled={loading} type="submit">Sign up</button>
      {error && <p>{error.message}</p>}
    </form>
  );
}
