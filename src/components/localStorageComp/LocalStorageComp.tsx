import { IUserDataFromDB } from "../../Interfaces/userInterfaces"

export const localStorageSetUserData = (name: string, data: IUserDataFromDB) => {

    console.log('data en localStorageSetUserData', data)

    const title = {
        id: data.id,
        name : data.name,
        email: data.email,
        active : data.active,
        role : data.role,
    }

    console.log('data en localStorageSetUserData', data)
   
    localStorage.setItem(name, JSON.stringify(title))
}

export const getDataFromLocalStorage = (name:string) => {
    console.log('name en localstorage: ', name)
    const jsonUserFromLocalStorage: any = localStorage.getItem(name);
    console.log('jsonUserFromLocalStorage: ', jsonUserFromLocalStorage);
    const userFLS = JSON.parse(jsonUserFromLocalStorage);
    console.log('userFLS: ', userFLS);
    console.log('userFLS.user :', userFLS?.user );
    console.log('userFLS.user.role: ', userFLS?.user?.role);
    return userFLS
}

export const cleanDataInLocalStorage = (name:string) => {
    localStorage.removeItem(name);
}