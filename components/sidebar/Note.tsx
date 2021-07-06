import { formatDate } from "@/lib/format-date";
import { Dispatch, SetStateAction } from "react";
import { Note } from "types/note.type";

interface Props {
    note: Note;
    noteId: string | undefined;
    setNoteId: Dispatch<SetStateAction<string | undefined>>;
    setIsNoteOpened: Dispatch<SetStateAction<boolean>>;
}

export const NoteComponent: React.FC<Props> = ({
    note,
    noteId: selectedNoteId,
    setNoteId,
    setIsNoteOpened,
}) => {
    const selectNote = () => {
        setNoteId(note.id);
        setIsNoteOpened(true);
    };

    return (
        <div
            className={`${
                note.id === selectedNoteId
                    ? "bg-gray-100 md:bg-gray-300"
                    : "bg-gray-100 hover:bg-gray-300"
            } p-2 my-4 cursor-pointer`}
            onClick={selectNote}
        >
            <div>{note.title}</div>

            <div className="text-xs text-gray-500">
                Updated at {formatDate(note.updateDate)}
            </div>

            <div className="text-xs text-gray-500">
                Created at {formatDate(note.createDate)}
            </div>
        </div>
    );
};
