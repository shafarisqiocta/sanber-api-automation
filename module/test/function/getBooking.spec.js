import request from "supertest";
import { baseUrl } from "../../data/config.js";

async function getBookingAll(){
    let response = await request(baseUrl) // base url
    .get("/booking"); // endpoint

    return (await response)
}
async function getBookingParams(paramFirstName,paramLastName){
    let response = await request(baseUrl) // base url
     .get(`/booking`+`?firstname=${paramFirstName}&lastname=${paramLastName}`); // endpoint with param

     return (await response)
}
async function getBookingid(bookingId){
    const response = await request(baseUrl) // base url
        .get(`/booking/${bookingId}`); // endpoint

        return (await response)
}

export const getBooking = {
    all : getBookingAll,
    param : getBookingParams,
    id : getBookingid,
}