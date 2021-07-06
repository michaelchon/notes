import { MutableRefObject, useEffect, useState } from "react";

export const useEditor = ({
    el,
}: {
    el: MutableRefObject<HTMLDivElement | null>;
}) => {
    const [editor, setEditor] = useState<any>();

    useEffect(() => {
        if (editor || !el.current) {
            return;
        }

        const setupEditor = async () => {
            const ClassicEditor = (
                await import("@ckeditor/ckeditor5-build-classic")
            ).default;

            const newEditor = await ClassicEditor.create(el.current, {
                toolbar: [
                    "heading",
                    "bold",
                    "italic",
                    "link",
                    "blockQuote",
                    "bulletedList",
                    "numberedList",
                    "indent",
                    "outdent",
                    "insertTable",
                ],
            });

            setEditor(newEditor);
        };

        setupEditor();

        return () => {
            if (!editor) {
                return;
            }

            console.log("destroy editor");

            editor.destroy();
        };
    }, [editor, el]);

    return editor;
};
