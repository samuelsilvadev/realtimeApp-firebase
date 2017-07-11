import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CadastroPessoaFormComponent, CadastroPessoaListaComponent]
})
export class CadastroPessoaModule { }
