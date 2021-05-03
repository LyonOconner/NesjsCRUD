import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type DistroDocument = Distros & Document;

@Schema()
//el nombre de la clase define el nombre de la colleccion
export class Distros {
    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    autor: string;

    @Prop()
    @ApiProperty()
    year: number;
}

export const DistroSchema = SchemaFactory.createForClass(Distros);