import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { CustomAuthenticationGuard } from './local.guard';

@Controller('/user/profile')
export class AppController {

    @UseGuards(CustomAuthenticationGuard)
    @Get()
    getHello(@Request() req): any {
        const { name, email } = req.user;
        return {
            name,
            email
        }
    }
}
