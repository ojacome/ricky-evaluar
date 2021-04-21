import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/apiResponse.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characters: any[] = []


  constructor(
    private apiSvc: ApiService
  ) { 
    this.cargarCharacters();
  }

  ngOnInit(): void {
  }

  cargarCharacters(){
    this.apiSvc.getCharacters()
    .subscribe( res=> {
      this.characters = res.results
      console.log(this.characters);
      
    } )
  }
}
