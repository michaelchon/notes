import { notesApi } from "api/notes.api";
import { Dispatch, SetStateAction } from "react";
import { Note } from "types/note.type";

export const useDeleteNote = ({
    id,
    setNotes,
}: {
    id: any;
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) => {
    const deleteNote = async () => {
        if (typeof id !== "string") {
            return;
        }

        await notesApi.delete(id);
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    return deleteNote;
};
