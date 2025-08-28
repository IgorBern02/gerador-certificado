import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.html',
  imports: [SecondaryButton, ItemCertificado],
  styleUrls: ['./certificados.css'],
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit() {
    this.carregarCertificados();
  }

  carregarCertificados() {
    this.certificadoService.getCertificados().subscribe({
      next: (data) => (this.certificados = data),
      error: (err) => console.error('❌ Erro ao carregar certificados:', err),
    });
  }

  removerCertificado(id: string) {
    this.certificadoService.deletarCertificado(id).subscribe({
      next: () => {
        console.log('✅ Certificado removido:', id);
        this.certificados = this.certificados.filter((c) => c._id !== id);
      },
      error: (err) => {
        console.error('❌ Erro ao remover certificado:', err);
      },
    });
  }
}
