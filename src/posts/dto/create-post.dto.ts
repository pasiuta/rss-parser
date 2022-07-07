import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreatePostDto {
    @ApiProperty({
        example: 'Following Germany, Estonia Ready to Hold Conference on Reforms in Ukraine in 2024',
        description: 'title',
        required: true
    })

    @IsNotEmpty({message: "title is required field"})
    @IsString({message: 'Must be a string'})
    readonly title: string;

    @ApiProperty({example: 'News', description: 'category', required: true})
    @IsNotEmpty({message: "category is required field"})
    @IsString({message: 'Must be a string'})
    readonly category: string;

    @ApiProperty({example: 'Ukrayinska Pravda', description: 'author', required: true})
    @IsNotEmpty({message: "author is required field"})
    @IsString({message: 'Must be a string'})
    readonly author: string;

    @ApiProperty({example: 'https://www.eurointegration.com.ua/eng/news/2022/07/5/7142607/', description: 'link'})
    @IsString({message: 'Must be a string'})
    readonly link: string;

    @ApiProperty({
        example: 'The Deputy Minister of Foreign Affairs of Estonia, Andres Rundu, announced his country\'s readiness to host a conference on reforms in Ukraine in 2024.',
        description: 'description',
        required: true
    })

    @IsNotEmpty({message: "description is required field"})
    @IsString({message: 'Must be a string'})
    readonly description: string;

}