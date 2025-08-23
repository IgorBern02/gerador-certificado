import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificado } from './_components/item-certificado/item-certificado';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoFrom } from './pages/certificado-from/certificado-from';
import { Certificado } from './pages/certificado/certificado';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    PrimaryButton,
    SecondaryButton,
    ItemCertificado,
    BaseUi,
    Certificados,
    CertificadoFrom,
    Certificado,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
