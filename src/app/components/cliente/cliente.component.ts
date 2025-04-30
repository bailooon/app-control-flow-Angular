import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/Clientes';
import { ClienteService } from '../../services/cliente.service';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clienteForm: FormGroup = new FormGroup({})
  cliente: Cliente[] = []

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) {
    this.clienteForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['']
    });

  }

  list(): void {
    this.cliente = this.clienteService.list()
  }

  //método executado ao inicializar a página
  ngOnInit(): void {
    this.list()
  }


  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  save() {
    if (this.clienteForm.valid) {
      const formData = this.clienteForm.value
      const clienteAdd: Cliente = {
        id: this.generateRandomString(6),
        nome: formData.nome,
        telefone: formData.telefone
      }
      // console.log(clienteAdd)
      this.clienteService.add(clienteAdd) //Chamando a service para inserir
      alert('Inserido com sucesso') // Enviando feedback ao usuário
      this.clienteForm.reset // Limpar o form após o preenchimento
      this.list()
    } else {
      alert('Por favor preencher os campos obrigatórios')
    }
  }

}
