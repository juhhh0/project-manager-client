import { useMutation } from "@apollo/client";
import { TrashIcon } from "@heroicons/react/20/solid";
import { DELETE_TASK } from "../../../services/mutations";

const DeleteTask: React.FC<{ id: string }> = ({ id }) => {
  const [deleteTask, { loading }] = useMutation(DELETE_TASK, {
    refetchQueries: ["GetProject"],
  });

  const deleteTaskClick = async () => {
    let sure = confirm("Are you sure you want to delete this task?");

    if (!sure) return;
    
    await deleteTask({
      variables: {
        id,
      },
    });
  };
  return (
    <button
      className="absolute bottom-0 right-0"
      onClick={deleteTaskClick}
      disabled={loading}
    >
      <TrashIcon className="w-5 h-5 text-red-500" />
    </button>
  );
};

export default DeleteTask;
