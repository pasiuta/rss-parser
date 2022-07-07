import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiResponse} from '@nestjs/swagger';
import {CreatePostDto} from './dto/create-post.dto';
import {PostEntity} from './posts.entity';
import {PostsService} from './posts.service';
import {UpdatePostDto} from "./dto/update-post.dto";
import {Paginate, Paginated, PaginateQuery} from "nestjs-paginate";

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {
    }

    @Get()

    public findAll(@Paginate() query: PaginateQuery): Promise<Paginated<PostEntity>> {
        return this.postService.findAll(query)
    }

    @ApiOperation({summary: 'Creating Post'})
    @ApiParam({name: 'posts', required: true, description: 'posts'})
    @ApiResponse({status: 200, type: PostEntity, description: 'created post'})
    @UsePipes(ValidationPipe)
    @Post()

    createPost(@Body() dto: CreatePostDto) {
        return this.postService.create(dto)
    }

    @ApiOperation({summary: 'Get All Posts'})
    @ApiParam({
        name: 'posts?limit=5&page=2&sortBy=createdAt:ASC&search=Ukraine',
        description: 'use couple methods in 1 query.'
    })

    @ApiParam({name: 'posts?limit=5&page=1', description: 'posts pagination.'})
    @ApiParam({name: 'posts?sortBy=createdAt:ASC', description: 'posts sorting.'})
    @ApiParam({name: 'posts?title=Ukrainian Armed', description: 'posts searching.'})
    @ApiParam({name: 'posts', required: true, description: 'posts'})
    @ApiResponse({status: 200, type: [PostEntity], description: 'get all posts'})
    @Get()

    getAll() {
        return this.postService.getAllPosts();
    }

    @ApiOperation({summary: 'Get Post'})
    @ApiResponse({status: 200, type: [PostEntity], description: 'get 1 post'})
    @Get('/:id')

    getOne(@Param('id') id: number) {
        return this.postService.getPost(id)
    }

    @ApiOperation({summary: 'Update Post'})
    @ApiResponse({status: 200, type: [PostEntity], description: 'updated post'})
    @UsePipes(ValidationPipe)
    @Put('/:id')

    update(@Param('id') id: number, @Body() postDto: UpdatePostDto) {
        return this.postService.updatePost(id, postDto);
    }

    @ApiOperation({summary: 'Delete Post'})
    @ApiResponse({status: 200, type: [PostEntity], description: 'deleted post'})
    @Delete('/:id')

    remove(@Param('id') id: number) {
        return this.postService.removePost(id);
    }

}
