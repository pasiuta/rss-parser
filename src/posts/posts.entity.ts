import {Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";
@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({example: '1', description: 'Unique identifier'})
    id: number;
    @Column()
    @ApiProperty({example: 'Following Germany, Estonia Ready to Hold Conference on Reforms in Ukraine in 2024', description: 'title'})
    title: string;
    @Column({type: 'varchar', nullable: true})
    @ApiProperty({example: 'https://www.eurointegration.com.ua/eng/news/2022/07/5/7142607/', description: 'link'})
    link: string;
    @Column({type: 'varchar', nullable: true})
    @ApiProperty({example: 'News', description: 'category'})
    category: string;
    @Column()
    @ApiProperty({example: 'Ukrayinska Pravda', description: 'author'})
    author: string;
    @Column({type: 'varchar', nullable: true})
    @ApiProperty({example: 'The Deputy Minister of Foreign Affairs of Estonia, Andres Rundu, announced his country\'s readiness to host a conference on reforms in Ukraine in 2024.', description: 'description'})
    description: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}