import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import CustomTextArea from "../components/ui/TextArea";
import CustomButton from "../components/ui/Button";

const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      title
      description
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: ID!, $project: UpdateProjectInput!) {
    updateProject(id: $id, project: $project) {
      title
    }
  }
`;

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  const [updateProject, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_PROJECT, {
    refetchQueries: ["GetProject"],
  })

  const submitDescription = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    await updateProject({
      variables: {
        id,
        project: {
          description: form["description"].value,
        },
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{data.project.title}</h2>
      <form action="" onSubmit={submitDescription}>
        <CustomTextArea name="description" label="description" value={data.project.description} />
        <CustomButton label="Update Description" disabled={updateLoading} type="submit" className="mt-3" />
        {updateError && <p>{updateError.message}</p>}
      </form>
    </div>
  );
}
