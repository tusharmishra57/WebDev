import {Client} from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_8EOICfq0Anvy@ep-old-tooth-axigxdry-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_8EOICfq0Anvy",
//     port: 5432,
//     host: "ep-old-tooth-axigxdry-pooler.c-4.us-east-2.aws.neon.tech",
//     database: "neondb"
// })

async function main() {
    await pgClient.connect();
};
