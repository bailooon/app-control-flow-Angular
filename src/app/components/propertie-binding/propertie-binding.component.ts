import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-propertie-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propertie-binding.component.html',
  styleUrl: './propertie-binding.component.css'
})
export class PropertieBindingComponent {
  imgUrl = "../../../assets/pexels-sebastian-ervi-866902-1763075.jpg";
  isDisabled = false;
  descImg = "Banda de rock"

}
