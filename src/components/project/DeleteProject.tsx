import { gql, useMutation } from "@apollo/client";
import CustomButton from "../ui/Button";

const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export default function DeleteProject({ id }: { id: string }) {
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
      label="Delete"
      color="red"
      disabled={loading}
      onClick={deleteProjectClick}
    />
  );
}
