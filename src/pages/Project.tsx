import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import CustomTextArea from "../components/ui/TextArea";
import CustomButton from "../components/ui/Button";
import { UPDATE_PROJECT } from "../services/mutations";
import { GET_PROJECT } from "../services/queries";

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  const [updateProject, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_PROJECT, {
      refetchQueries: ["GetProject"],
    });

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
        <CustomTextArea
          name="description"
          label="description"
          value={data.project.description}
        />
        <CustomButton
          label="Update Description"
          disabled={updateLoading}
          type="submit"
          className="mt-3"
        />
        {updateError && <p>{updateError.message}</p>}
      </form>
    </div>
  );
};

export default Project;