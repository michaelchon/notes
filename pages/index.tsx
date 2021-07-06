import { NoteComponent } from "@/components/note/Note";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useNote } from "@/hooks/notes/useNote";
import { useNoteId } from "@/hooks/notes/useNoteId";
import { useNotes } from "@/hooks/notes/useNotes";
import { useState } from "react";

export default function Home() {
    const [notes, setNotes] = useNotes();
    const [noteId, setNoteId] = useNoteId(notes);
    const note = useNote(noteId);
    const [isNoteOpened, setIsNoteOpened] = useState(false);

    return (
        <div className="min-h-screen flex justify-between items-stretch">
            <Sidebar
                notes={notes}
                setNotes={setNotes}
                noteId={noteId}
                setNoteId={setNoteId}
                isNoteOpened={isNoteOpened}
                setIsNoteOpened={setIsNoteOpened}
            />

            <NoteComponent
                note={note}
                setNotes={setNotes}
                isNoteOpened={isNoteOpened}
                setIsNoteOpened={setIsNoteOpened}
            />
        </div>
    );
}
