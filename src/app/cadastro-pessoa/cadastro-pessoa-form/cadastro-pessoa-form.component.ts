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

  ngOnInit() {
  }

  salvar(f: NgForm){
    //this.displayList = "display:block";
    this.angularFire.list("pessoas")
    .push({
      nome: f.controls.nome.value,
      sobrenome: f.controls.sobreNome.value,
      contato: f.controls.contato.value
    }).then((t: any) => console.log('dados gravados: ' + t.key)),
            (e: any) => console.log(e.message);

      this.limparCampos(f);      
    }

    limparCampos(f: NgForm){
      f.controls.nome.setValue('');
      f.controls.sobreNome.setValue('');
      f.controls.contato.setValue('');
    }

}