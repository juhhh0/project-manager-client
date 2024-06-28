import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import CustomButton from "../ui/Button";

const ProjectContent: React.FC<{ content: string }> = ({ content }) => {
    const editor = useCreateBlockNote();

    return (
        <>
            <BlockNoteView editor={editor} />
            <CustomButton label="Save" onClick={() => console.log(editor.document)} />
        </>
    );

};

export default ProjectContent