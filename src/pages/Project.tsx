import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../services/queries";
import ProjectTabs from "../components/Project/ProjectTabs";

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ProjectTabs content={data.project.content} project={data.project} />;
};

export default Project;
