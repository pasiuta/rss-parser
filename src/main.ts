import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    console.log(PORT)
    const app = await NestFactory.create(AppModule)
    const config = new DocumentBuilder()
        .setTitle('rss-parser')
        .setDescription('Documentation REST API')
        .setVersion('1.0.0')
        .addTag('test project')
        .build()
    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/api/docs',app,document)

    await app.listen(PORT,()=> console.log(`Server started on ${PORT}`))
}
bootstrap();