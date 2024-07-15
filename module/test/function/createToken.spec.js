import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createToken() {
    const payload = {
        "username" : "admin",
         "password" : "password123"
}           //send request
const response = await request(baseUrl) // base url
.post("/auth") // endpoint
.send(payload) // req body
.set("Content-Type","application/json")  //header

const token = (await response).body.token
return token
}
