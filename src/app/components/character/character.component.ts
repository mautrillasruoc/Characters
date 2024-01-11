import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  character!: Character;

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    if (!identifier) {
      this.router.navigateByUrl('/').then(() => {});
      return;
    }

    this.charactersService.getImageById(identifier).subscribe((character) => {
      if (!character) {
        this.router.navigateByUrl('/').then(() => {});
        return;
      }

      this.character = character;
      console.log('Character --> ', this.character);
    });
  }
}
