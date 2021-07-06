import { Header } from "@/components/sidebar/Header";
import { Notes } from "@/components/sidebar/Notes";
import { Dispatch, SetStateAction } from "react";
import { Note } from "types/note.type";

interface Props {
    notes: Note[];
    setNotes: Dispatch<SetStateAction<Note[]>>;
    noteId: string | undefined;
    setNoteId: Dispatch<SetStateAction<string | undefined>>;
    isNoteOpened: boolean;
    setIsNoteOpened: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar: React.FC<Props> = ({
    notes,
    setNotes,
    noteId,
    setNoteId,
    isNoteOpened,
    setIsNoteOpened,
}) => {
    return (
        <div
            className={`bg-gray-800 py-16 px-4 ${
                isNoteOpened ? "hidden" : "block"
            } md:block`}
            style={{ flex: "1" }}
        >
            <Header setNotes={setNotes} />

            <Notes
                notes={notes}
                noteId={noteId}
                setNoteId={setNoteId}
                setIsNoteOpened={setIsNoteOpened}
            />
        </div>
    );
};
