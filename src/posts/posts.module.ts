import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PostsService} from './posts.service';
import {PostsController} from './posts.controller';
import {PostEntity} from './posts.entity';
import {ScheduleModule} from "@nestjs/schedule";

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity]), ScheduleModule.forRoot(),],
    providers: [PostsService],
    controllers: [PostsController],
    exports: [
        TypeOrmModule
    ]
})
export class PostsModule {
}