import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";

describe("Auth KasirAja", function() {
    this.timeout(10000); // Menambahkan batas waktu tes menjadi 10 detik jika diperlukan

    let token;

    it("Positive - Success Registration", async () => {
        const payload = {
            "name": "nama Toko",
            "email": "contoh@gmail.com",
   "password": "bunga123"
        };
        console.log("Registration Payload:", payload);

        const response = await request(baseUrl)
            .post("/registration")
            .send(payload)
            .set("Content-Type", "application/json");

        console.log("Registration Response:", response.body);
        expect(response.status).to.equal(201);
    });

    it("Positive - Success Login", async () => {
        const payload = {
            "email": "contoh@gmail.com",
   "password": "bunga123"
        };
        console.log("Login Payload:", payload);

        const response = await request(baseUrl)
            .post("/authentications")
            .send(payload)
            // .set("Content-Type", "application/json");

        console.log("Login Response:", response.body);
        expect(response.status).to.equal(201);  // Pastikan status yang diharapkan sesuai dengan API
        token = response.body.data.accessToken; // Simpan token untuk digunakan di tes berikutnya
    });

    // Anda dapat menambahkan tes berikutnya yang membutuhkan token di sini
    it("Positive - Access Protected Route", async () => {
        const response = await request(baseUrl)
            .get("/protected-route") // ganti dengan endpoint yang membutuhkan otorisasi
            .set("Authorization", `Bearer ${token}`)
            .set("Content-Type", "application/json");

        console.log("Protected Route Response:", response.body);
        expect(response.status).to.equal(200);
    });
});
