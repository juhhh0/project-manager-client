import { useMutation } from "@apollo/client";
import CustomButton from "../ui/Button";
import CustomTextArea from "../ui/TextArea";
import { UPDATE_PROJECT } from "../../services/mutations";

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

  const submitDescription = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    await updateProject({
      variables: {
        id: project.id,
        project: {
          description: form["description"].value,
        },
      },
    });
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{project.title}</h2>
      <form action="" onSubmit={submitDescription}>
        <CustomTextArea
          name="description"
          label="description"
          value={project.description}
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

export default ProjectSettings;
