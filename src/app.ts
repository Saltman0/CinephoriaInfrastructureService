import express, { Express } from "express";
import cors from "cors";
import pino from "pino";
import { subscribeToMessages } from "./rabbitmq";
import passport from "./middleware/passport";
import cinemaRoutes from "./routes/cinema.routes";
import hallRoutes from "./routes/hall.routes";
import incidentRoutes from "./routes/incident.routes";


export const port: number = parseInt(process.env.PORT as string) || 3000;

export const app: Express = express();

export const logger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true
        }
    }
});

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use(cinemaRoutes);
app.use(hallRoutes);
app.use(incidentRoutes);

await subscribeToMessages("movie");
await subscribeToMessages("showtime");