//  ================
//  TYPE DEFINITIONS
//  ================

export interface MessageResponse {
    message: string
}

interface ErrorResponse extends MessageResponse {
    stack?: string
}
