import {Client} from "pg";

const pgClient = new Client("connection Url");

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
};
main()
