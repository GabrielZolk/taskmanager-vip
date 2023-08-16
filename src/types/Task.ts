export interface Task {
    id: string;
    uid?: string;
    date?: number;
    content: string;
    completed: boolean;
}