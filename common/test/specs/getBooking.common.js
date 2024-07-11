// ini adalah contoh api automation menggunakan common js
const { expect } = require("chai");
const request = require("supertest");

const baseUrl = "https://restful-booker.herokuapp.com/";

// desc the test suite
describe("Get All Booking", () => {
    it("Positive - Success Get All Booking", () => {
        const response = request(baseUrl) // base url
        .get("/booking") //endpoint

        //assertion pakai chai
        expect(response.status).to.equal(200)
    })
})