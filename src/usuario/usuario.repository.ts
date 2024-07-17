import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Usuario from './usuario.entity';

@Injectable()
export class UsuarioRepository {
    alterar(arg0: number, usuario: Usuario) {
        throw new Error('Method not implemented.');
    }
    constructor (private primsaService: PrismaService) {}

    async obterTodos() {
        return this.primsaService.usuario.findMany();
    }
    async obterPorId(id: number) {
        return this.primsaService.usuario.findUnique({
            where: { id }
        });
    }
    async criar(usuario: Usuario) {
        return this.primsaService.usuario.create({ 
            data: usuario as any,
        });
    }
    async atualizar(usuario: Usuario) {
        if (!usuario.id) throw new Error('Id é obrigatório para atualizar');
        return this.primsaService.usuario.update({
            where: { id: usuario.id },
            data: usuario as any,
        });
    }
    async deletar(id: number) {
        return this.primsaService.usuario.delete({
            where: { id }
        });
    }
}
