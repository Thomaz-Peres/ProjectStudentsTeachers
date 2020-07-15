import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public professorForm: FormGroup;
  public title = 'Professores';
  public professorSelecionado: Professor;
  public textSimple: string;

  public professores = [
    { id: 1, nome: 'Robertinha', disciplina: 'matematica' },
    { id: 2, nome: 'Laurinha', disciplina: 'fisica' },
    { id: 3, nome: 'Andrezinho', disciplina: 'geografia' },
    { id: 4, nome: 'Cecilia', disciplina: 'programação' },
    { id: 5, nome: 'Matheuszim', disciplina: 'antropologia' },
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
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required],
    })
  }

  professorSubmit() {
    console.log(this.professorForm.value)
  }


  profSelect(prof: Professor) {
    this.professorSelecionado = prof;
    this.professorForm.patchValue(prof)
  }

  voltar() {
    this.professorSelecionado = null;
  }

}