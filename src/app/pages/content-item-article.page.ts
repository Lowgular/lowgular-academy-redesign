import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-item-article',
  templateUrl: './content-item-article.page.html',
  styleUrls: ['./content-item-article.page.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class ContentItemArticlePage {}
