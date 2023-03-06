import express,{Request,Response} from 'express';
import Controller from '../interface/controller.interface';


export class LocationController implements Controller {
    public path = "/location"
    public router = express.Router();


    constructor(){
        this.initialzeRoutes()
    }

    public initialzeRoutes(){
        this.router.post(`${this.path}/find`,this.filterNearMe)
    }

    private filterNearMe = (req: Request,res: Response) => {
        try {
            const data:object = req.body
            res.status(200).json(data)   
        } catch (error) {
            res.status(500).json({message : "Internal Server Error"})
        }
    }
}