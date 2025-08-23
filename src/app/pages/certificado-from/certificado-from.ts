import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';

@Component({
  selector: 'app-certificado-from',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificado-from.html',
  styleUrl: './certificado-from.css',
})
export class CertificadoFrom {}
