import { Router, Request, Response } from "express";

const Usersrouter = Router()

Usersrouter.get('/users', (request: Request, response: Response) => {
     response.status(200).json({mensagem: "get usuarios ok"})
});

Usersrouter.get('/users/:uuid', (request: Request<{uuid: string}>, response: Response) => {
    const uuid = request.params.uuid;
    console.log(uuid);
    response.status(200).json({mensagem: "get usuarios: uuid ok " + {uuid}});
});

Usersrouter.post('/users', (request: Request, response: Response) => {
    response.status(201).json({mensagem: "POST ok"})
    console.log(request.body);
});

Usersrouter.put('/users/:uuid', (request: Request<{uuid: string}>, response: Response) => {
    const uuid = request.params.uuid
    response.status(200).json({m: "alterado"})
    console.log(uuid)
});

Usersrouter.delete('/users/:uuid', (request: Request<{uuid: string}>, response: Response) => {
    const uuid = request.params.uuid
    response.status(200).json({m: "deletado"})
    console.log(uuid)
})

export default Usersrouter;