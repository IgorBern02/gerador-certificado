import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from './_components/navbar/navbar';
import { BaseUi } from './_components/base-ui/base-ui';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, BaseUi, RouterOutlet, RouterModule, CommonModule], // remove HttpClientModule
  providers: [CertificadoService],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  protected readonly title = signal('gerador-certificado');

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    // const certificados = localStorage.getItem('certificados');
    this.certificadoService.getCertificados().subscribe((data) => {
      localStorage.setItem('certificados', JSON.stringify(data));
    });
  }
}
