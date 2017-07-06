import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

import { FireBaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FireBaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
