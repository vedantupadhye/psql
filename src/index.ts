// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users2 (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();
async function insertData (username : string , password : string , email : string) {
    await client.connect()
   
    const result = await client.query(`
        INSERT INTO users2 (username , password ,email)
        VALUES ($1 ,$2, $3)
    `,[username ,password ,email])
    console.log(result)
}

insertData(
    "user3",
    "866944231",
    "bailya@gmail.com"
);