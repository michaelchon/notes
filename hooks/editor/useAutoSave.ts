import { useEffect, useRef } from "react";

export const useAutoSave = ({
    editor,
    onSave,
}: {
    editor: any;
    onSave: Function;
}) => {
    const prevData = useRef();

    useEffect(() => {
        if (!editor) {
            return;
        }

        let currentData = editor.getData();
        prevData.current = currentData;

        const interval = setInterval(() => {
            currentData = editor.getData();

            if (currentData !== prevData.current) {
                prevData.current = currentData;
                onSave(currentData);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [editor, onSave]);
};
