import { gql, useQuery } from '@apollo/client';
import DeleteProject from './DeleteProject';

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
  return (
    <section className='mt-8'>
        <h2 className='text-xl font-bold'>Your projects</h2>
        <ul>
            {data.userProjects.map((project: any) => (
                <li key={project.id}>
                  <p>{project.title}</p>
                  <p>Description</p>
                  <DeleteProject id={project.id} />
                </li>
            ))}
        </ul>
    </section>
  )
}
