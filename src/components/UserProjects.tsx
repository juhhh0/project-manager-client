import { gql, useQuery } from "@apollo/client";
import DeleteProject from "./DeleteProject";
import { Link } from "react-router-dom";

const GET_USER_PROJECTS = gql`
  query GetUserProjects {
    userProjects {
      title
      description
      id
    }
  }
`;

export default function UserProjects() {
  const { data, error, loading } = useQuery(GET_USER_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Your projects</h2>
      <ul>
        {data.userProjects.map((project: any) => (
          <li
            key={project.id}
            className="border-b flex justify-between items-center py-8"
          >
            <Link to={"/project/" + project.id}>
              <p>{project.title}</p>
              <p className="opacity-70">{project.description}</p>
            </Link>
            <DeleteProject id={project.id} />
          </li>
        ))}
      </ul>
    </section>
  );
}
