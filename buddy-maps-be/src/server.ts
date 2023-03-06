import App from "./app";
import {LocationController} from "./controller/location.controller"

export const app = new App(
    [
        new LocationController()
    ],3000
);

app.listen()