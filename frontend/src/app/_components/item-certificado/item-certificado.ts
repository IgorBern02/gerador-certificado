import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';
import { RemoveButton } from '../remove-button/remove-button';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, RemoveButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id?: string = '';

  @Output() excluir = new EventEmitter<string>();

  constructor(private router: Router) {}

  redirecionaCertificado() {
    if (!this.id) return;
    this.router.navigate(['/certificados', this.id]);
  }

  remover() {
    if (this.id) {
      this.excluir.emit(this.id);
    }
  }
}
