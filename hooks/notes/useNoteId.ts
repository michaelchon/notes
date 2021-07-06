import { useEffect, useState } from "react";
import { Note } from "types/note.type";

export const useNoteId = (notes: Note[]) => {
    const [noteId, setNoteId] = useState<string>();

    useEffect(() => {
        if (!notes.length) {
            return;
        }

        setNoteId(notes[0].id);
    }, [notes]);

    return [noteId, setNoteId] as const;
};
