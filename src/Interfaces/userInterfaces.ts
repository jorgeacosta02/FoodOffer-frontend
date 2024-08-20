
// Interface for save user in db
export interface IUserData {
    name: string;
    email: string;
    password: string;
    type: string;
    id_Type: number;
    id_Number: string;
    phone: string;
    cell_Phone: string;
    role: string;
    active: boolean;
}

// Interface user from db
export interface IUserDataFromDB {
    id: string,
    name: string;
    email: string;
    password: string;
    type: string;
    id_Type: number;
    id_Number: string;
    phone: string;
    cell_Phone: string;
    role: string;
    active: boolean;
}

// Interface for register user
export interface IUserRegisterData {
    name: string;
    email: string;
    password: string;
    type: string;
    id_Type: number;
    id_Number: string;
    phone: string;
    cell_Phone: string;
    // role: string;
    // active: boolean;
}

// LOGIN
export interface IUserLoginData {
    email: string;
    password: string;
  }

// ApiResponse
export interface ApiResponse {
    user: IUserData;
    message: string;
}

// LocalStorage 'user'
export interface ILocalStorageUserData {
    name: string;
    email: string;
    password: string;
    type: string;
    id_Type: number;
    id_Number: string;
    phone: string;
    cell_Phone: string;
    role: string;
    active: boolean;
}
  