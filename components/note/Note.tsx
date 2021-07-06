import { Editor } from "@/components/Editor";
import { useDeleteNote } from "@/hooks/notes/useDeleteNote";
import { useSaveNote } from "@/hooks/notes/useSaveNote";
import { formatDate } from "@/lib/format-date";
import { Dispatch, SetStateAction } from "react";
import { Note } from "types/note.type";

interface Props {
    note: Note | undefined;
    setNotes: Dispatch<SetStateAction<Note[]>>;
    isNoteOpened: boolean;
    setIsNoteOpened: Dispatch<SetStateAction<boolean>>;
}

export const NoteComponent: React.FC<Props> = ({
    note,
    setNotes,
    isNoteOpened,
    setIsNoteOpened,
}) => {
    const saveNote = useSaveNote(note?.id);
    const deleteNote = useDeleteNote({ id: note?.id, setNotes });

    if (!note) {
        note = {
            id: "id",
            title: "Title",
            content: "<p>content</p>",
            createDate: new Date().toISOString(),
            updateDate: new Date().toISOString(),
        };
    }

    const goBack = () => {
        setIsNoteOpened(false);
    };

    return (
        <div
            className={` w-full bg-gray-100 p-4 md:p-16 ${
                isNoteOpened ? "block" : "hidden"
            } md:block`}
            style={{ flex: "3" }}
        >
            <h1 className="text-3xl">{note.title}</h1>

            <div className="text-xs text-gray-500">
                Updated at {formatDate(note.updateDate)}
            </div>

            <div className="text-xs text-gray-500">
                Created at {formatDate(note.createDate)}
            </div>

            <button
                className="bg-red-400 text-white text-xs px-2 py-1 mr-2"
                onClick={deleteNote}
            >
                Delete
            </button>

            <button
                className="bg-gray-300 text-xs px-2 py-1 inline-block md:hidden"
                onClick={goBack}
            >
                Back
            </button>

            <div className="mt-8">
                <Editor initialContent={note.content} onSave={saveNote} />
            </div>
        </div>
    );
};
