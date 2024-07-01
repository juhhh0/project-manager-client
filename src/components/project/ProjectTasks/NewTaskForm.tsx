import { useMutation } from "@apollo/client";
import CustomButton from "../../ui/Button";
import ErrorMessage from "../../ui/ErrorMessage";
import CustomInput from "../../ui/Input";
import { ADD_TASK } from "../../../services/mutations";
import CustomTextArea from "../../ui/TextArea";

type Props = {
  project: string;
};

const NewTaskForm: React.FC<Props> = ({ project }) => {
  const [addTask, { loading, error }] = useMutation(ADD_TASK, {
    refetchQueries: ["GetProject"],
  });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    await addTask({
      variables: {
        projectId: project,
        task: {
          title: form["task-title"].value,
          content: form["task-content"].value,
        },
      },
    });
  };
  return (
    <form action="" onSubmit={submit} className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Add a new task</h2>
      <CustomInput name="task-title" label="Title" type="text" />
      <CustomTextArea name="task-content" label="Content" />

      <ErrorMessage error={error} />
      <CustomButton
        label="Add Task"
        disabled={loading}
        type="submit"
        className="mt-3"
      />
    </form>
  );
};

export default NewTaskForm;
