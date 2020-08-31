
export interface IUser {
    _id?: string;
    fullusername: string;
    email: string;
    phone: string;
    city: string;
    password?:string;
    role:string;
    isGranted:boolean;
    avatar_url?: string;
    token: string;
}