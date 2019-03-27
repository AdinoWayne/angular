export class AppError {
    constructor(public originaError?: any) {
        alert('ahihi')
    }
}
export class NotFoundError extends AppError {
    
}