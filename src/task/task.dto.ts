

export class TaskDto {
    id: string;
    title: string;
    description: string;
    status: string;
    expirationDate: Date;
}

export interface FindALlParameters {
    title: string;
    status: string;
}