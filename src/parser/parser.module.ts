import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ParserService} from './parser.service';
import {PostEntity} from '../posts/posts.entity';
import {ScheduleModule} from "@nestjs/schedule";

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity]), ScheduleModule.forRoot(),],
    providers: [ParserService],
    controllers: [],
    exports: [
        TypeOrmModule
    ]
})
export class ParserModule {
}