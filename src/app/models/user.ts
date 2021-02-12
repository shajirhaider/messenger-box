export class User{
    id: number = 0;
    name : string = "";
    email: string = "";
    phone: string = "";
    notes: string = "";
    message: Message [] = [];
}


export class Message {
    data: string = "";
    date: string = "";
    sender : string = ""
}