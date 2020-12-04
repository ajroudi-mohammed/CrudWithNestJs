import { Controller, Get, HttpCode, Post, Redirect, Req, Res } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    create( @Req() req: Request ): String{
        return "this route creates a cats record";
    }

    @Get()
    //@Redirect('https://www.google.com', 301)
    @HttpCode(201)
    findAll(): string {
        return "this action returns all cats";
    }
}
