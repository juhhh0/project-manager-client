import { ProjectType } from '../../types/types'
import DeleteProject from './DeleteProject'
import { Link } from 'react-router-dom'

export default function ProjectList({title, projects} : {title?: string, projects: ProjectType[]}) {
  return (
    <section className="mt-8">
    <h2 className="text-xl font-bold">{title}</h2>
    <ul>
      {projects.map((project: any) => (
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
  )
}
