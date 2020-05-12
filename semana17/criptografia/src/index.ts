import express from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { getProfileEndpoint } from "./endpoints/getProfileEndpoint";
import { signupEndpoint } from "./endpoints/signupEndpoint";
import { loginEndpoint } from "./endpoints/loginEndpoint";
import { deleteProfileEndpoint } from "./endpoints/deleteEndpoint";
import { getUserByIdEndpoint } from "./endpoints/getUserByIdEndpoint";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/signup", signupEndpoint);

app.post("/login", loginEndpoint);

app.get("/user/profile", getProfileEndpoint); 

app.get("/user/:id", getUserByIdEndpoint);

app.delete("/user/:id", deleteProfileEndpoint);