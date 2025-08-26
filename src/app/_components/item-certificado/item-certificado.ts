import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';
import { RemoveButton } from '../remove-button/remove-button';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, RemoveButton, RemoveButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id: string = '';

  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', this.id]);
  }
}
