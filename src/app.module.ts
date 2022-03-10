import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { CustomStrategy } from './custom.strategy';

@Module({
    imports: [PassportModule],
    controllers: [AppController],
    providers: [CustomStrategy],
})
export class AppModule { }
