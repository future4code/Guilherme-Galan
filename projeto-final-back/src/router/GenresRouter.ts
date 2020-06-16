import express from 'express';
import { GenresController } from '../controller/GenresController';


export const genresRouter = express.Router();

genresRouter.post("/add", new GenresController().addGenre);

genresRouter.get("/allGenres", new GenresController().getAllGenres);