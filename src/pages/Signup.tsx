import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/ui/Input";
import CustomButton from "../components/ui/Button";

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
    <form action="" onSubmit={submit} className="flex flex-col max-w-sm mx-auto">
      <CustomInput name="email" label="Email" type="email" />
      <CustomInput name="username" label="Username" type="text" className="my-3" />
      <CustomInput name="password" label="Password" type="password" />
      <CustomButton label="Sign up" disabled={loading} type="submit" className="mt-3"/>
      {error && <p>{error.message}</p>}
    </form>
  );
}
