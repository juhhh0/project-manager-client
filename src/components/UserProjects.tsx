import { gql, useQuery } from '@apollo/client';

const GET_USER_PROJECTS = gql`
  query GetUserProjects{
    userProjects {
      title
      id
    }
  }
`;


export default function UserProjects() {
    const { data, error, loading } = useQuery(GET_USER_PROJECTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data, "projects")
  return (
    <section>
        <h2>Projects</h2>
        <ul>
            {data.userProjects.map((project: any) => (
                <li key={project.id}>{project.title}</li>
            ))}
        </ul>
    </section>
  )
}
