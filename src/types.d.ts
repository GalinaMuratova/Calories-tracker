export interface IMeal {
    mealTime:string;
    description:string;
    calories:number
}

export interface IMealMut {
    id:string;
    mealTime:string;
    description:string;
    calories:number
}

export interface IApiMeal {
    [id: string]: IMealMut;
}