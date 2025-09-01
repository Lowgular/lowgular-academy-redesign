import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-item-sequence',
  templateUrl: './content-item-sequence.page.html',
  styleUrls: ['./content-item-sequence.page.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class ContentItemSequencePage {}
