import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.html',
  imports: [SecondaryButton, ItemCertificado],
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[] = [];

  constructor(private service: CertificadoService) {}

  ngOnInit() {
    this.carregarCertificados();
  }

  carregarCertificados() {
    this.service.getCertificados().subscribe({
      next: (data) => (this.certificados = data),
      error: (err) => console.error('❌ Erro ao carregar certificados:', err),
    });
  }

  deletar(id: string | undefined) {
    if (!id) return;

    const confirmacao = confirm('Tem certeza que deseja deletar este certificado?');
    if (!confirmacao) return;

    this.service.deletarCertificado(id).subscribe({
      next: () => {
        console.log('✅ Certificado deletado');
        this.carregarCertificados();
      },
      error: (err) => console.error('❌ Erro ao deletar certificado:', err),
    });
  }
}
