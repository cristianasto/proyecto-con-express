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
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(400).json({error: 'ID argunment is not a number'})
        
        const todo = todos.find((todo)=>todo.id == id)
        todo ? res.json(todo) : res.status(404).json({error: `TODO with id ${id} not found`});
    }

    public createTodo = (req: Request, res: Response)=>{
        const {text} = req.body

        if(!text) return res.status(400).json({error: 'Text proporty is required'})
        const newTodo = {
            id: todos.length + 1,
            text: text,
            createAt: null
        }
        todos.push(newTodo)

        res.json(newTodo)
    }
    
    // public updateTodo = (req: Request, res: Response)=>{
    //     const id = parseInt(req.params.id);
    //     if(isNaN(id)) return res.status(400).json({error: 'ID argunment is not a number'})
        
    //     const todo = todos.find((todo)=>todo.id == id)
    //     !todo ? res.json(todo) : res.status(404).json({error: `TODO with id ${id} not found`});

    //     const {text} = req.body
    //     if(!text) return res.status(400).json({error: 'Text proporty is required'})
    
    //     res.json(todo)
    // }

    // public deleteTodo = (req: Request, res: Response)=>{
        
    // }

}