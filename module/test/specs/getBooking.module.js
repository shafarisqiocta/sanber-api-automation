import request from "supertest";
import { expect } from "chai";
import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = "sally";
const paramLastName ="brown";
const bookingId = "112"

// Deskripsi suite tes
describe("Get All Booking", function() {
    // Perpanjang batas waktu menjadi 5000ms
    this.timeout(5000);

    it("Positive - Success Get All Booking", async function() {
        let response = await request(baseUrl) // base url
            .get("/booking"); // endpoint

        // Assertion menggunakan chai
        expect(response.status).to.equal(200);
        // console.log((await response).body);
    });
    it("Positive - Success Get All Booking with param", async function() {
        let response = await request(baseUrl) // base url
            .get(`/booking`+`?firstname=${paramFirstName}&lastname=${paramLastName}`); // endpoint with param

        // Assertion menggunakan chai
        expect(response.status).to.equal(200);
        // console.log((await response).body);
    });
    it("Positive - Success bookingId", async function() {
        const response = await request(baseUrl) // base url
            .get(`/booking/${bookingId}`); // endpoint

        // Assertion menggunakan chai
        expect(response.status).to.equal(200);
        // console.log((await response).body);
    });
});
describe("Get booking scenario by function", () =>{
    it("sukses get all booking by function", async () => {
        const response = await getBooking.all();
        console.log((await response).status);

        expect(response.status).to.equal(200);
        console.log((await response).body);

    })
})
