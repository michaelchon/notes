import { useAutoSave } from "@/hooks/editor/useAutoSave";
import { useEditor } from "@/hooks/editor/useEditor";
import { useRef } from "react";

interface Props {
    initialContent: string;
    onSave: Function;
}

export const Editor: React.FC<Props> = ({ initialContent, onSave }) => {
    const editorEl = useRef<HTMLDivElement | null>(null);
    const editor = useEditor({
        el: editorEl,
    });
    useAutoSave({ editor, onSave });

    if (editor) {
        editor.setData(initialContent);
    }

    return <div ref={editorEl}></div>;
};
