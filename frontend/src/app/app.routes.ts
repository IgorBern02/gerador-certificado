import { Routes } from '@angular/router';

import { CertificadoForm } from './pages/certificado-form/certificado-form';
import { CertificadoComponent } from './pages/certificado/certificado';
import { CertificadosComponent } from './pages/certificados/certificados';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'certificados',
    pathMatch: 'full',
  },
  {
    path: 'certificados',
    component: CertificadosComponent,
  },
  {
    path: 'certificados/novo',
    component: CertificadoForm,
  },
  {
    path: 'certificados/:id',
    component: CertificadoComponent,
  },
];
