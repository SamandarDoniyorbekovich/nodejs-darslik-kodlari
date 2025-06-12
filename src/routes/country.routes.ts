import { Router } from "express";
import { countryController } from "../controller/country.controller";

const router = Router();

router.get("/", countryController.getAllCountry);

router.post("/", countryController.createCountry);

export default router;
