import { Request, Response } from "express"


const todos = [
    {id: 1, text: 'Buy milk', createAt: new Date()},
    {id: 2, text: 'Buy bread', createAt: null},
    {id: 3, text: 'Buy butter', createAt: new Date()}
]

export class TodosController {

    constructor(){}

    public getTodos = (req: Request, res: Response)=>{
        return res.json(todos);
    }

    public getTodoById = (req: Request, res: Response)=>{
        const id = req.params.id;
        res.json({id})
    }
}