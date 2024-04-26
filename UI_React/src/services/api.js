import axios from "axios";


let jwtToken = localStorage.getItem(`Token`);
let authHeader = `Bearer ${jwtToken}`;

export const HEADERS = {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
}

const URI = 'http://localhost:8080/api'


const SignIn = (email, password) => axios.post(URI + '/auth/login', { email,password })
const Signup = (name, email, phone, address, password) => axios.post(URI + '/auth/register', { name, email, phone, address, password })



export { SignIn,Signup}