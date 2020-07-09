import Router, {Request, Response} from "express";
import VisitorRepository from "../repositories/VisitorRepository";
import Visitor from "../models/Visitor";

const visitorRouter = Router();
const visitorRepository = new VisitorRepository();

visitorRouter.post('/', (request: Request, response: Response) => {
    const {name, email} = request.body;
    const createdAt = new Date();
    const visitor = visitorRepository.save(name, email, createdAt);
    return response.json(visitor);
});

visitorRouter.get('/', (request: Request, response: Response) => {
    const visitors = visitorRepository.findAll();
    if (visitors.length === 0) {
        return response.json([]);
    }
    return response.json(visitors);
});

visitorRouter.get('/:id', (request: Request, response: Response) => {
    const {id} = request.params;
    const visitor = visitorRepository.findById(id);
    return isValidated(visitor, response);
});

visitorRouter.patch('/:id', (request: Request, response: Response) => {
    const {params: {id}, body: {name, email, createdAt}} = request;
    const visitor = visitorRepository.update(id, name, email, createdAt);
    return isValidated(visitor, response);
});

visitorRouter.delete('/:id', (request: Request, response) => {
    const {id} = request.params;
    const visitor = visitorRepository.delete(id);
    return isValidated(visitor, response);
});

function isValidated(visitor: Visitor | null, response: Response): Response {
    return !visitor ?
        response.status(400).json({message: 'Visitor not found'}) :
        response.json(visitor);
}

export default visitorRouter;