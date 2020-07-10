export interface TUsers {
    id?: number;
    username?: string;
    password?: string;
    created_at: Date;
}
export interface TChirps {
    id?: number;
    userid?: number;
    content?: string;
    created_at: Date;
}