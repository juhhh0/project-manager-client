import { useMutation } from "@apollo/client";
import CustomButton from "../../ui/Button";
import { DELETE_PROJECT } from "../../../services/mutations";

const DeleteProject: React.FC<{ id: string }> = ({id}) => {
  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT, {
    refetchQueries: ["GetUserProjects"],
  });

  const deleteProjectClick = async () => {
    await deleteProject({
      variables: {
        id,
      },
    });
  };

  return (
    <CustomButton
      label="Delete Project"
      color="red"
      disabled={loading}
      onClick={deleteProjectClick}
    />
  );
};

export default DeleteProject;
