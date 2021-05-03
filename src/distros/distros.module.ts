import { Module } from '@nestjs/common';
import { DistrosController } from './distros.controller';
import { DistrosService } from './distros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Distros, DistroSchema } from '../schemas/distro.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Distros.name, schema: DistroSchema }])
  ],
  controllers: [DistrosController],
  providers: [DistrosService]
})
export class DistrosModule { }
