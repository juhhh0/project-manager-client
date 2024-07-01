import { useMutation } from "@apollo/client";
import React from "react";
import CustomInput from "../ui/Input";
import CustomButton from "../ui/Button";
import { CREATE_PROJECT } from "../../services/mutations";
import ErrorMessage from "../ui/ErrorMessage";

const NewProjectForm: React.FC = () => {
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
    <form action="" onSubmit={submit} className="flex flex-col h-40">
      <h2 className="text-xl font-bold mb-3">Start a new project</h2>
      <CustomInput name="project-title" label="Project Title" type="text" />
      <ErrorMessage error={error} />
      <CustomButton
        label="Create Project"
        disabled={loading}
        type="submit"
        className="mt-3"
      />
    </form>
  );
};

export default NewProjectForm;
