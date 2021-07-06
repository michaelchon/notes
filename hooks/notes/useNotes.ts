import { sort } from "@/lib/sort";
import { notesApi } from "api/notes.api";
import axios from "axios";
import { useEffect, useState } from "react";
import { Note } from "types/note.type";

export const useNotes = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchNotes = async () => {
            const notes = await notesApi.findAll(source.token);
            const sorted = sort(notes, "createDate");
            sorted.reverse();

            setNotes(sorted as Note[]);
        };

        fetchNotes();

        return () => {
            source.cancel();
        };
    }, []);

    return [notes, setNotes] as const;
};
