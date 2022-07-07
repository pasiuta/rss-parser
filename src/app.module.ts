import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from "@nestjs/config";
import {PostEntity} from "./posts/posts.entity";
import {PostsModule} from "./posts/posts.module"
import {ParserModule} from "./parser/parser.module"

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true, envFilePath: './.env'}),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [PostEntity],
            migrations: [
                "src/migration/**/*.ts"
            ],
            synchronize: true,
        }),
        PostsModule, ParserModule
    ],
})
export class AppModule {
}