import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrazioneRoutingModule } from './registrazione-routing.module';
import { RegistrazioneComponent } from './registrazione.component';


@NgModule({
  declarations: [RegistrazioneComponent],
  imports: [
    CommonModule,
    RegistrazioneRoutingModule
  ]
})
export class RegistrazioneModule { }
