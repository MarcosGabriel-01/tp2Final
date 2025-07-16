import Service from "../services/Services.js";
import Controller from "../controllers/Controller.js";

const service= new Service()
const controller = new Controller(service)

export default controller