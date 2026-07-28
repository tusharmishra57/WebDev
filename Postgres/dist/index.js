"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_rawHul3YB7fN@ep-late-hat-ayth2vwx-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_rawHul3YB7fN",
//     port: 5432,
//     host: "ep-late-hat-ayth2vwx-pooler.c-5.us-east-2.aws.neon.tech",
//     database: "neondb",
//     ssl: true
// })
async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
}
;
main();
//# sourceMappingURL=index.js.map