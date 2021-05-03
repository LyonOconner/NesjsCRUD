import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DistrosModule } from './distros/distros.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DistrosModule,
    //el host es el que se define en el servicio de docker-compose
   MongooseModule.forRoot('mongodb://mongodb:27017/distrosdb')],
    //MongooseModule.forRoot('mongodb://127.0.0.1:27017/distrosdb')],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
