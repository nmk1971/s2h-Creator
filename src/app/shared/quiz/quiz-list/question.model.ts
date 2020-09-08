export interface IQuestion {
    _id?:string;
    quizId: string;
    questionText: string;
    question_type: string;
    qcxResponse?: IQCXResponse[];
    orderingResponse?:IOrderingResponse[];
    inputResponse?:IInputResponse[]
    
}


export interface IQCXResponse {
    label: string;
    isValid: boolean;
}







export interface IOrderingResponse {
    label: string;
    order: number;
}

export interface IInputResponse {
    correctAnswer: string;
}