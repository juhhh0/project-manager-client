import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import CustomButton from "../ui/Button";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../../services/mutations";
import { ProjectType } from "../../types/types";
import ErrorMessage from "../ui/ErrorMessage";

type Props = {
  content: string;
  project: ProjectType;
};

const ProjectContent: React.FC<Props> = ({ content, project }) => {
  const editor = useCreateBlockNote({
    initialContent: JSON.parse(content),
  });

  const [updateProject, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_PROJECT, {
      refetchQueries: ["GetProject"],
    });

  const saveContent = async (editor: any) => {
    const content = JSON.stringify(editor.document);

    await updateProject({
      variables: {
        id: project.id,
        project: {
          content: content,
        },
      },
    });
  };

  return (
    <>
      <h2 className="font-bold text-xl pl-14">{project.title}</h2>
      <BlockNoteView editor={editor} />
      <CustomButton
        label="Save"
        disabled={updateLoading}
        onClick={() => saveContent(editor)}
        className="block ml-auto mt-3"
      />
      <ErrorMessage error={updateError} />
    </>
  );
};

export default ProjectContent;
