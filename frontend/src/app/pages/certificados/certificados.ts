import { Component, OnInit } from '@angular/core';
import { Certificado, CertificadoService } from '../../_services/certificado.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.html',
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[] = [];

  constructor(private service: CertificadoService) {}

  ngOnInit() {
    this.carregarCertificados();
  }

  carregarCertificados() {
    this.service.getCertificados().subscribe((data) => (this.certificados = data));
  }

  deletar(id: string) {
    this.service.deletarCertificado(id).subscribe(() => this.carregarCertificados());
  }
}
