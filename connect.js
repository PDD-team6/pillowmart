import { createPool } from "mysql2";
export const connect =createPool({
    host:'localhost',
    user:'root',
    password:'pillowparadise@234',
    database:'pillowmart'
}).promise();