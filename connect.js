import { createPool } from "mysql2";
export const connect =createPool({
    host:'localhost',
    user:'root',
    password:'Loki@234',
    database:'pillowmart'
}).promise();