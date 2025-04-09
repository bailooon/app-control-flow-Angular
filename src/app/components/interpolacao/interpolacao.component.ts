import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolacao.component.html',
  styleUrl: './interpolacao.component.css'
})
export class InterpolacaoComponent {
  name: string = 'Matheus';
  age: number = 19;
  job = 'Developer';
  hobbies = ['Music', 'Sports', 'Movies'];
  car = {make: 'Ford', model: 'Fiesta'};
  img = '../../../assets/pexels-mickhaupt-5668029 (1).jpg';

}
