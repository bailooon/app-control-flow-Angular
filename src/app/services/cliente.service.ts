import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Clientes'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Criar uma lista fake
  clientes: Cliente[] = [
    {
      id: "fnaisdadiwawd",
      nome: "Matheus",
      telefone: "3128747812"
    },
    {
      id: "jkmgjjninreoin",
      nome: "Kaique"
    }
  ]

  constructor() { }

  //retornar a lista de clientes
  list(): Cliente[] {
    return this.clientes;
  }

  remove(id: string) {
    const cliente = this.clientes.find(
      c => c.id == id
    ) //buscar o cliente na lista

    if (cliente) {//se encontrar o cliente
      //busca o index
      const index = this.clientes.indexOf(cliente)
      //remove da lista
      this.clientes.splice(index, 1)
    }
  }

  //método adicionar um cliente
  add(cliente: Cliente) {
    //o push adicioan um item(objeto) dentro de uma array(lista)
    this.clientes.push(cliente)
    console.log(this.clientes)
  }

  update(id: string, cliente: Cliente) {
    const index = this.clientes.findIndex(
      c => c.id == id
    )

    if (index !== -1) {
      this.clientes[index] =
      {
        ...this.clientes[index],
        ...cliente
      }
    }
  }
}
