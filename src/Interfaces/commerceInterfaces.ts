
// {
//     "Id": 0,
//     "OwnerId": 1,
//     "Name": "Comercio ejemplo 2",
//     "Addresses": [],
//     "Attributes": [],
//     "Type": 1,
//     "Mail": "info@comjemplo2.com",
//     "Phone": "123-456-7890",
//     "CellPhone": "098-765-4321",
//     "WebUrl": "https://www.comejemplo.com"
//   }


// Interface for save user in db
export interface ICommerceData {
    OwnerId: number;
    Name: string;
    Addresses: [];
    Attributes: [];
    Type: number;
    Mail: string;
    Phone: string;
    CellPhone: string;
    WebUrl: string
}

// Interface user from db
export interface ICommerceDataFromDB {
    id: string,
    OwnerId: number;
    Name: string;
    Addresses: [];
    Attributes: [];
    Type: number;
    Mail: string;
    Phone: string;
    CellPhone: string;
    WebUrl: string
}

// Interface for register user
// export interface IUserRegisterData {
//     name: string;
//     email: string;
//     password: string;
//     type: string;
//     id_Type: number;
//     id_Number: string;
//     phone: string;
//     cell_Phone: string;
    // role: string;
    // active: boolean;
// }
  