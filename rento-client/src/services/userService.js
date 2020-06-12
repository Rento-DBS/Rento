import http from "./httpService";
// import { apiUrl } from "../config.json";

// const apiEndPoint = apiUrl + "/users";
const apiEndPoint = "/users";

export function register(user) {
    //1. Write the post function
    return http.post(apiEndPoint, {
        email: user.email, //in register form email is username
        password: user.password,
        name: user.name,
        phone: user.phone,
        drivingLicense: user.drivingLicense,
        card: {
            cardNumber: user.card.cardNumber,
            cvv: user.card.cvv,
            expiry: user.card.expiry,
            cardType: user.cardType,
        },
    });
}
