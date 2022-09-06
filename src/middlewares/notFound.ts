//  Library
import { Request, Response, NextFunction } from 'express'

export function notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404)     //? Use HTTP Status Codes Library here?
    const error = new Error(`404 - Not Found - ${req.originalUrl}`)
    next(error)
}
