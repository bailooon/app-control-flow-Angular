import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categorias } from '../../interfaces/Categorias';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  clienteForm: FormGroup = new FormGroup({})
  categorias: Categorias[] = []

  constructor(private categoriaService: CategoriaService, private formBuilder: FormBuilder) {
      this.clienteForm = formBuilder.group({
        nome: ['', Validators.required],
        descricao: [''],
        ativa: ['']
      });
  
    }

    

  list(): void {
    this.categoriaService.list().subscribe((resposta) => (this.categorias = resposta))
  }

  ngOnInit(): void {
    this.list()
  }
}


