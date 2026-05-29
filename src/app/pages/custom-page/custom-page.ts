import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/data';
import { canFlyPipe } from "../../pipes/canFly.pipe";
import { heroColorPipe } from "../../pipes/heroColor.pipe";
import { HeroTextColor} from "../../pipes/hero-text-color.pipe";
import { TitleCasePipe, NgClass } from '@angular/common';
import { HeroCreator } from "../../pipes/hero-creator.pipe";
import { ColorCreatorPipe } from "../../pipes/creator-color.pipe";
import { HeroSortByPipe } from "../../pipes/heroSortBy.pipe";
import { Hero } from '../../interfaces/interfaces';
import { HeroFilterPipe } from "../../pipes/hero-filter.pipe";

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, canFlyPipe, heroColorPipe, HeroTextColor, TitleCasePipe, HeroCreator, ColorCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal('Iván Alarcón');

  upperCase = signal(true)

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal("");
}
