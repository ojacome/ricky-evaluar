import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
