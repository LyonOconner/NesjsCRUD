import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Distros, DistroDocument } from '../schemas/distro.schema';

@Injectable()
export class DistrosService {

    constructor(@InjectModel(Distros.name) private distroModel: Model<DistroDocument>) {

    }

/*     async getAll() {
        return await this.distroModel.find().exec();
    } */
    
    async create(distro: Distros): Promise<Distros> {
        const createdDistro = new this.distroModel(distro);
        return await createdDistro.save();
    }

    async findAll() {
        return this.distroModel.find().exec();
    }

    async update(id: string, distro: Distros) {
        return await this.distroModel.updateOne({ _id: id }, distro).exec();
    }
    async delete(id: string) {
        return await this.distroModel.deleteOne({ _id: id }).exec();
    }



    /*     create(distro: DistroInterface) {
            this.distros.push(distro);
        }
    
        findAll(): DistroInterface[] {
            return this.distros;
        } */

}
