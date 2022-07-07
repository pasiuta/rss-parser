import {Injectable} from '@nestjs/common'
import {CreatePostDto} from './dto/create-post.dto';
import {PostEntity} from './posts.entity';
import {Repository} from 'typeorm';
import {UpdatePostDto} from "./dto/update-post.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {paginate, Paginated, PaginateQuery} from 'nestjs-paginate'

@Injectable()
export class PostsService {

    constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>) {
    }

    public findAll(query: PaginateQuery): Promise<Paginated<PostEntity>> {
        return paginate(query, this.postRepository, {
            sortableColumns: ['id', 'title', 'createdAt'],
            searchableColumns: ['title'],
            defaultSortBy: [['createdAt', 'DESC']],

        })
    }

    async create(dto: CreatePostDto): Promise<PostEntity> {
        return await this.postRepository.save(dto)
    }

    async getAllPosts() {
        return await this.postRepository.find();
    }

    async getPost(id: number): Promise<PostEntity> {
        return await this.postRepository.findOne({where: {id}})
    }

    async updatePost(id: number, dto: UpdatePostDto): Promise<number> {
        await this.postRepository.update({id}, dto);
        return id
    }

    async removePost(id: number): Promise<number> {
        await this.postRepository.delete({id});
        return id;
    }
}
