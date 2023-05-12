export interface IUser {
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    birthDate: string;
}

export interface IUserResponse {
    status: string;
    data: {
        user: IUser;
    };
}

export interface IUserLogin {
    username: string;
    password: string;
}

export interface IUserRegister {
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    birthDate?: string;
}

export interface IChangePass {
    email: string;
    newPass: string;
}
