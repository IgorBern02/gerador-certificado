import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { RemoveButton } from '../../_components/remove-button/remove-button';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, RemoveButton, RouterLink, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {
  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }
}
