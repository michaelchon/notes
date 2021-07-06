import { notesApi } from "api/notes.api";
import axios from "axios";
import { useEffect, useState } from "react";
import { Note } from "types/note.type";

export const useNote = (id: any) => {
    const [note, setNote] = useState<Note>();

    useEffect(() => {
        if (typeof id !== "string") {
            return;
        }

        const source = axios.CancelToken.source();

        const fetchNote = async () => {
            const note = await notesApi.findOne(id, source.token);

            setNote(note);
        };

        fetchNote();

        return () => {
            source.cancel();
        };
    }, [id]);

    return note;
};
