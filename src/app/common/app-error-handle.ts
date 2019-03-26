export class AppError {
    constructor(public originaError?: any) {

    }
}
export class NotFoundError extends AppError {
    
}