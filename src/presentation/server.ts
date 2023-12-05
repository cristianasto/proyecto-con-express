

import express, { Router } from 'express'
import path from 'path'


interface Options {
    port: number
    routes: Router
    public_path: string
}


export class Server {

    private app = express();
    private port: number;
    private publicPath: string;
    private routes: Router;

    constructor(options: Options){
        const {port, routes, public_path = 'public'} = options
        this.port = port
        this.routes = routes
        this.publicPath = public_path
    }

    async start(){
        this.app.use(express.json())

        this.app.use(express.static(this.publicPath))

        this.app.use( this.routes)
  
        this.app.get('*', (req, res)=>{
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`)
            res.sendFile(indexPath)
            return
            
        })

        this.app.listen(this.port, ()=>{
            console.log('server running on por 3000');
        })
    }
}   




