export interface Category {
    name: string,
    question_count: number,
    id: number,
    createdAt: Date,
    updatedAt: Date,
    parent_category: null
}

export interface Question {
    category: Category,
    question: string,
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answers: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
}