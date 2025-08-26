import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remove-button',
  imports: [],
  templateUrl: './remove-button.html',
  styleUrl: './remove-button.css',
})
export class RemoveButton {
  @Input() textoBotao: string = '';
}
