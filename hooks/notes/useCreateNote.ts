import { notesApi } from "api/notes.api";
import { Dispatch, SetStateAction } from "react";
import { Note } from "types/note.type";

export const useCreateNote = ({
    setNotes,
}: {
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) => {
    const createNote = async () => {
        const title = prompt("Enter note title");

        if (!title?.trim()) {
            return;
        }

        const note = await notesApi.create({
            title: title.trim(),
            content: "",
        });

        setNotes((prev) => [note, ...prev]);
    };

    return createNote;
};
