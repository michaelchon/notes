import { NoteComponent } from "@/components/sidebar/Note";
import { Dispatch, SetStateAction } from "react";
import { Note } from "types/note.type";

interface Props {
    notes: Note[];
    noteId: string | undefined;
    setNoteId: Dispatch<SetStateAction<string | undefined>>;
    setIsNoteOpened: Dispatch<SetStateAction<boolean>>;
}

export const Notes: React.FC<Props> = ({
    notes,
    noteId,
    setNoteId,
    setIsNoteOpened,
}) => {
    return (
        <>
            {notes.map((note, i) => (
                <NoteComponent
                    key={i}
                    note={note}
                    noteId={noteId}
                    setNoteId={setNoteId}
                    setIsNoteOpened={setIsNoteOpened}
                />
            ))}
        </>
    );
};
