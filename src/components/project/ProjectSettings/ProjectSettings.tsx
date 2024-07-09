import { useMutation } from "@apollo/client";
import CustomButton from "../../ui/Button";
import CustomTextArea from "../../ui/TextArea";
import { UPDATE_PROJECT } from "../../../services/mutations";
import CustomInput from "../../ui/Input";
import ErrorMessage from "../../ui/ErrorMessage";
import DeleteProject from "./DeleteProject";
import { ProjectType } from "../../../types/types";

type Props = {
  project: ProjectType;
};

const ProjectSettings: React.FC<Props> = ({ project }) => {
  const [updateProject, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_PROJECT, {
      refetchQueries: ["GetProject"],
    });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    await updateProject({
      variables: {
        id: project.id,
        project: {
          title: form["project-title"].value,
          description: form["description"].value,
          githubUrl: form["github-url"].value,
          hostingUrl: form["hosting-url"].value,
        },
      },
    });
  };

  return (
    <div>
      <form onSubmit={submit} className="flex flex-col gap-5">
        <CustomInput
          name="project-title"
          label="Title"
          type="text"
          value={project.title}
        />

        <CustomTextArea
          name="description"
          label="Description"
          value={project.description}
        />

        <CustomInput
          name="github-url"
          label="Github"
          type="text"
          value={project.githubUrl}
        />

        <CustomInput
          name="hosting-url"
          label="Hosting"
          type="text"
          value={project.hostingUrl}
        />

        <div className="flex gap-3">
          <DeleteProject id={project.id} />

          <CustomButton
            label="Update Project Settings"
            disabled={updateLoading}
            type="submit"
          />
        </div>
        <ErrorMessage error={updateError} />
      </form>
    </div>
  );
};

export default ProjectSettings;
