import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Create Booking Scenario", () => {
    it("Positive - Success Create Booking", async () => {
        const payload = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}           //send request
        const response = await request(baseUrl) // base url
        .post("/booking") // endpoint
        .send(payload) // req body
        .set("Content-Type","application/json")  //header

        expect(response.status).to.equal(418);
    })
})