import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public character;

  constructor(
    private apiSvc: ApiService,
    private activatedRoute: ActivatedRoute
  ) {    
    const { id } = this.activatedRoute.snapshot.params;
    
    this.cargarCharacter(id)
  }

  ngOnInit(): void {
  }

  cargarCharacter(id){
    this.apiSvc.getCharacter(id)
    .subscribe( res => this.character = res )
  }
}
