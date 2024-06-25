import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Input } from '@headlessui/react'
import CustomInput from "./ui/Input";
import CustomButton from "./ui/Button";


const CREATE_PROJECT = gql`
  mutation CreateProject($project: AddProjectInput!) {
    addProject(project: $project) {
      title
    }
  }
`;

export default function NewProjectForm() {
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: ["GetUserProjects"],
  });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    await createProject({
      variables: {
        project: {
          title: form["project-title"].value,
        },
      },
    });
  };
  return (
    <form action="" onSubmit={submit} className="flex flex-col max-w-sm">
      <h2 className="text-xl font-bold mb-3">Start a new project</h2>
      <CustomInput name="project-title" label="Project Title" type="text"  />
      <CustomButton label="Create Project" disabled={loading} type="submit" className="mt-3" />
      {error && <p>{error.message}</p>}
    </form>
  );
}
