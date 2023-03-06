import express,{Response} from 'express'
import cors from 'cors'
import Controller from "./interface/controller.interface"

class App {
    public PATH : string
    public app : express.Application
    public port : any

    constructor(controllers:Controller[],port:any) {
        this.app = express()
        this.port = port
        this.PATH = "/api"

        this.app.get("/api/",(_, res:Response) => {
            res.status(200).json({message : "Buddy Maps"})
        })
        this._initializeMiddleware()  
        this._initializeController(controllers)
    }

    private _initializeMiddleware(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    private _initializeController(controllers:Controller[]){
        controllers.map((controller) => {
            this.app.use(this.PATH,controller.router)
        }) 
    }

    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`App Listening at port ${this.port}`)
        })
    }
}

export default App