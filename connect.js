import { createPool } from "mysql2";
export const connect =createPool({
    host:'localhost',
    user:'root',
    password:'hellow@234',
    database:'pillowmart'
}).promise();