/*
 * @Description: 
 * @Author: shaochong
 * @Date: 2020-08-18 19:05:26
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from "nestjs-pino";

@Module({
  imports: [LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
