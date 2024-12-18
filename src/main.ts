import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory(errors) {
        const message = errors
          .map(error => `${error.property} - ${Object.values(error.constraints).join(', ')}`)
          .join(', ');
        return new BadRequestException(message);
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
