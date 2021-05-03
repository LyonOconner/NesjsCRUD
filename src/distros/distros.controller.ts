import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DistrosService } from './distros.service';
import { Distros, DistroDocument } from '../schemas/distro.schema';


@Controller('distro')//call in API
export class DistrosController {


    constructor(private readonly distroService: DistrosService) {

    }

    @Post()
    async create(@Body() Distro: Distros) {
        console.log('creando...');
        return await this.distroService.create(Distro)
  /*       this.distroService.create(Distro).then(function (res) {
            console.log(res);

        }).catch(function (e) {
            console.log('error', e);

        }) */
    }

    @Get()
    async findAll(): Promise<Distros[]> {
        return await this.distroService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() distro: Distros): Promise<any> {
        return await this.distroService.update(id, distro)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return await this.distroService.delete(id)
    }

}
