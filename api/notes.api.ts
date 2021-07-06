import axios, { CancelToken } from "axios";
import { CreateNoteDto, Note, UpdateNoteDto } from "types/note.type";

axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
        ? "https://peaceful-bayou-07049.herokuapp.com/api"
        : "http://localhost:5000/api";

class NotesApi {
    async create(note: CreateNoteDto) {
        const res = await axios.post("/notes", note);

        return res.data as Note;
    }

    async findAll(cancelToken: CancelToken) {
        const res = await axios.get("/notes", { cancelToken });

        return res.data as Note[];
    }

    async findOne(id: string, cancelToken: CancelToken) {
        const res = await axios.get(`/notes/${id}`, { cancelToken });

        return res.data as Note;
    }

    async update(id: string, note: UpdateNoteDto) {
        await axios.patch(`/notes/${id}`, note);
    }

    async delete(id: string) {
        await axios.delete(`/notes/${id}`);
    }
}

export const notesApi = new NotesApi();
