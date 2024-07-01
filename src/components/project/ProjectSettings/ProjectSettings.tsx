import { useMutation } from "@apollo/client";
import CustomButton from "../../ui/Button";
import CustomTextArea from "../../ui/TextArea";
import { UPDATE_PROJECT } from "../../../services/mutations";
import CustomInput from "../../ui/Input";
import ErrorMessage from "../../ui/ErrorMessage";
import DeleteProject from "./DeleteProject";

type Props = {
  project: {
    id: string;
    title: string;
    description: string;
  };
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
        },
      },
    });
  };
  return (
    <div>
      <form action="" onSubmit={submit} className="flex flex-col gap-5">
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
