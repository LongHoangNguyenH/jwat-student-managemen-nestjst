import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponse } from '../errors/response.errors';
import { INTERNAL_SERVER_ERROR } from '../errors/constants.errors';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    let errorResponse: ErrorResponse;
    if (exception instanceof HttpException) {
      errorResponse = {
        statusCode: status,
        message: exception.message,
        data: response.req.body,
      };
    } else {
      errorResponse = {
        statusCode: 500,
        message: INTERNAL_SERVER_ERROR,
      };
    }

    response.status(status).json(errorResponse);
  }
}
