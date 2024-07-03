import { createPool } from "mysql2";
export const connect =createPool({
    host:'localhost',
    user:'root',
    password:'pill@234',
    database:'pillowmart77'
}).promise();