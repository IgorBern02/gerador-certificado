import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  @ViewChild('form') form!: NgForm;

  certificado: Certificado = {
    nome: '',
    curso: [],
    data: '',
  };

  curso: string = '';

  constructor(private certificadoService: CertificadoService, private route: Router) {}

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.nome.trim().length > 0 && this.certificado.curso.length > 0;
  }

  submit() {
    if (!this.formValido()) return;

    this.certificado.data = this.dataAtual();

    this.certificadoService.criarCertificado(this.certificado).subscribe({
      next: (res) => {
        console.log('✅ Certificado criado:', res);
        this.route.navigate(['certificados']);
      },
      error: (err) => {
        console.error('❌ Erro ao criar certificado:', err);
      },
    });
  }

  adicionarAtividade() {
    if (this.curso.trim().length === 0) return;
    this.certificado.curso.push(this.curso.trim());
    this.curso = '';
  }

  dataAtual() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  estadoInicialCertificado(): Certificado {
    return {
      nome: '',
      curso: [],
      data: '',
    };
  }
}
