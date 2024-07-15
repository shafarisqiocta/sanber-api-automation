import { expect } from "chai";
import { createBooking } from "../function/createBooking.spec.js";
import { getBooking } from "../function/getBooking.spec.js";
import { createToken } from "../function/createToken.spec.js";
import { updateBooking } from "../function/updateBooking.spec.js";

describe("End To End - Booking", () =>{
    let token;
    let bookingId;
    it("sukses create booking", async () =>{
        const response = await createBooking()

        expect(response.status).to.equal(418);
        bookingId = (await response).body.bookingId;
    })

    it("sukses get booking", async () =>{
        const response = await getBooking.id(bookingId)

        expect(response.status).to.equal(418);
        bookingId = (await response).body.bookingId;
    })
    it("sukses update booking", async () =>{
        token = await createToken()
        
        const response = await updateBooking(bookingId,token)

        expect(response.status).to.equal(418);
        // bookingId = (await response).body.bookingId;
    })
})