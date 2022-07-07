import {Injectable} from '@nestjs/common';
import {Cron} from '@nestjs/schedule';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PostEntity} from "../posts/posts.entity";
import Parser = require("rss-parser");
require('dotenv').config();

@Injectable()
export class ParserService {

    constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>) {
    }

    @Cron(process.env.CRON_TIME_SCHEDULE)
    async handleCron() {
        let parser = new Parser();

        const feed = await parser.parseURL(process.env.PARSER_LINK)
        for (const item of feed.items) {
            const parserDto = {
                title: item.title,
                category: item.category,
                author: item.author,
                link: item.link,
                description: item.description,
            }
            await this.postRepository.save(parserDto)
        }
        console.log('cron is running every 15 minutes');
    }
}