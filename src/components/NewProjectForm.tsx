import { gql, useMutation } from "@apollo/client";
import React from "react";

const CREATE_PROJECT = gql`
  mutation CreateProject($project: ProjectInput!) {
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
    <form action="" onSubmit={submit}>
      <label htmlFor="project-title">Project Name</label>
      <input type="text" id="project-title" />
      <button disabled={loading} type="submit">
        Create Project
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
}
