export interface Note {
    id: string;
    title: string;
    content: string;
    createDate: string;
    updateDate: string;
}

export interface CreateNoteDto {
    title: string;
    content: string;
}

export type UpdateNoteDto = Partial<CreateNoteDto>;
