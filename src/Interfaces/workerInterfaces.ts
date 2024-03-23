
// Interface for save worker in db
export interface IWorkerData {
    firstName: string;
    lastName: string;
    dni: string;
    healthPlan?: string;
    phone: string;
    email: string;
    password: string;
    active: boolean;
    role: string;
}

// Interface prof worker db
export interface IWorkerDataFromDB {
    id: string,
    firstName: string;
    lastName: string;
    dni: string;
    healthPlan?: string;
    phone: string;
    email: string;
    password: string;
    active: boolean;
    role: string;
}

// Interface for register worker
export interface IWorkerRegisterData {
    firstName: string;
    lastName: string;
    dni: string;
    healthPlan?: string;
    phone: string;
    email: string;
    password: string;
}

// LOGIN
export interface IWorkerLoginData {
    dni: string;
    password: string;
  }

// ApiResponse
export interface ApiResponse {
    worker: IWorkerData;
    message: string;
}

// LocalStorage 'prof'
export interface ILocalStorageWorkerData {
    id: string,
    firstName: string;
    lastName: string;
    dni: string;
    healthPlan?: string;
    phone: string;
    email: string;
    active: boolean;
    role: string;
}
  