
import { envs } from "./config/envs";
import { Rutas } from "./presentation/rutas";
import { Server } from "./presentation/server";


const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: Rutas.routes
})

server.start()
