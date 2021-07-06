import { notesApi } from "api/notes.api";

export const useSaveNote = (id: any) => {
    const saveNote = async (content: string) => {
        if (typeof id !== "string") {
            return;
        }

        await notesApi.update(id, { content });
    };

    return saveNote;
};
