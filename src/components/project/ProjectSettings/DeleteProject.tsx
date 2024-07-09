import { useMutation } from "@apollo/client";
import CustomButton from "../../ui/Button";
import { DELETE_PROJECT } from "../../../services/mutations";
import { useNavigate } from "react-router-dom";

const DeleteProject: React.FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();

  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT, {
    refetchQueries: ["GetUserProjects"],
  });

  const deleteProjectClick = async () => {
    const sure = confirm("Are you sure you want to delete this project?");

    if (!sure) return;

    await deleteProject({
      variables: {
        id,
      },
    });

    navigate("/");
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
