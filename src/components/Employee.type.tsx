export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    date: string;
}

// export const dummyEmployeeList: Employee[] = [
//     {
//         id: new Date().toJSON().toString(),
//         firstName: 'Dummy',
//         lastName: '1',
//         email: 'dummy1@gmail.com',
//     },
// ];

export enum PageEnum {
    list,
    add,
    edit,
}