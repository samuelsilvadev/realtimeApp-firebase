import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  salvar(form: NgForm){
    //this.displayList = "display:block";
    // if(this.pessoas.indexOf(form.form.controls.nome.value) === -1){
    //   this.pessoas.push({
    //       nome: form.form.controls.nome.value, 
    //       sobrenome: form.form.controls.sobreNome.value, 
    //       contato: form.form.controls.contato.value
    //   });
    // }
  }
}
