import { createPool } from "mysql2";
export const connect =createPool({
    host:'localhost',
    user:'root',
    password:'pillowmart@234',
    database:'pillowmart'
}).promise();