import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {

  constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() {}

  salvar(f: NgForm){
  
    this._getListaPessoas()
      .push(this._preparaObjeto(f))
      .then((t: any) => console.log('dados gravados: ' + t.key)), (e: any) => console.log(e.message);
    this._limparCampos(f);
  }

  _preparaObjeto(f: NgForm){
    return {
      nome: f.controls.nome.value,
      sobrenome: f.controls.sobreNome.value,
      contato: f.controls.contato.value
    }
  }

  _limparCampos(f: NgForm){
    f.controls.nome.setValue('');
    f.controls.sobreNome.setValue('');
    f.controls.contato.setValue('');
  }

  _getListaPessoas(){
    return this.angularFire.list("pessoas");
  }
}