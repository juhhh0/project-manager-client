import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../services/queries";
import ProjectSettings from "../components/project/ProjectSettings";
import ProjectContent from "../components/project/ProjectContent";

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ProjectSettings project={data.project} />
      <ProjectContent content={"Content"} />
    </div>
  );
};

export default Project;
