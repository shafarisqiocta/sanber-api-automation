import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get Token", function() {
    this.timeout(10000); // Menambahkan batas waktu tes menjadi 10 detik

    let token;

    it("Positive - Success Get Token", async () => {
        const payload = {
            "username": "admin",
            "password": "password123"
        };

        const response = await request(baseUrl)
            .post("/auth")
            .send(payload)
            .set("Content-Type", "application/json");

        expect(response.status).to.equal(200);
        token = response.body.token; // Menyimpan token dari respons
        console.log("Token:", token); // Mencetak token untuk debugging
    });

    it("Positive - Success Implement Token", async () => {
        const response = await request(baseUrl)
        .put("/booking"+bookingId)
        .set("Cookie",token)
        // console.log("Implement Token:", token); // Mencetak token untuk debugging
    });

    it("Import token", async () => {
        const importedToken = await createToken(); // Pastikan createToken dieksekusi dengan benar
        console.log("Imported Token:", importedToken); // Mencetak token yang diimpor untuk debugging
    });
});
