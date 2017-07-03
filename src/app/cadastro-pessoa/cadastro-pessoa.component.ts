import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoas: Array<any>;
  displayList: string;

  constructor() { }

  ngOnInit() {
    this.pessoas = new Array<any>();
    this.displayList = "display:none";
  }

  salvar(form: NgForm){
    this.displayList = "display:block";
    if(this.pessoas.indexOf(form.form.controls.nome.value) === -1){
      this.pessoas.push({nome:form.form.controls.nome.value, sobrenome:form.form.controls.sobreNome.value});
      console.log(this.pessoas);
    }
  }
}
