import { AnswerOption } from "./AnswerOption";

export interface QuestionModel{
    text:String; 
    bgImage:String;
    bgColor:String;
    questionColor:String;
    options:AnswerOption[];
}