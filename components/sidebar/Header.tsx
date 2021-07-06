import { useCreateNote } from "@/hooks/notes/useCreateNote";
import { Dispatch, SetStateAction } from "react";
import { Note } from "types/note.type";

interface Props {
    setNotes: Dispatch<SetStateAction<Note[]>>;
}

export const Header: React.FC<Props> = ({ setNotes }) => {
    const createNote = useCreateNote({ setNotes });

    return (
        <div className="flex justify-between items-center bg-gray-100 p-2">
            <div
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-2 cursor-pointer"
                onClick={createNote}
            >
                +
            </div>
        </div>
    );
};
