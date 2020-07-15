import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public title = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
    { id: 1, nome: 'Thomaz', sobrenome: 'Kent', telefone: 332255559 },
    { id: 2, nome: 'Camini', sobrenome: 'Isabela', telefone: 335428889 },
    { id: 3, nome: 'Matheu', sobrenome: 'Anotonio', telefone: 556688599 },
    { id: 4, nome: 'Rafael', sobrenome: 'Maria', telefone: 656565989 },
    { id: 5, nome: 'Martaa', sobrenome: 'Machado', telefone: 565685415 },
    { id: 6, nome: 'Lauraa', sobrenome: 'Alvares', telefone: 987451289 },
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) { 
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value)
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }
  
}