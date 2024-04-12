
// Interface for save admin in db
export interface IAdminData {
    firstName: string;
    lastName: string;
    dni: string;
    password: string;
    active: boolean;
    role: string;
}

// Interface prof admin db
export interface IAdminDataFromDB {
    id: string,
    firstName: string;
    lastName: string;
    dni: string;
    password: string;
    active: boolean;
    role: string;
}

// Interface for register admin
export interface IAdminRegisterData {
    firstName: string;
    lastName: string;
    dni: string;
    password: string;
    active: boolean;
    role: string;
}

// LOGIN
export interface IAdminLoginData {
    dni: string;
    password: string;
  }

// ApiResponse
export interface ApiResponse {
    admin: IAdminData;
    message: string;
}

// LocalStorage 'prof'
export interface ILocalStorageAdminData {
    id: string,
    firstName: string;
    lastName: string;
    dni: string;
    password: string;
    active: boolean;
    role: string;
}
  