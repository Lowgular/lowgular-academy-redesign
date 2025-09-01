import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: './solution-reviewed-accepted.page.html',
  standalone: true,
  imports: [RouterLink],
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .card {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      }

      .task-start__head {
        flex-shrink: 0; /* Prevent header from shrinking */
      }

      /* Ensure the container takes full width and remaining height */
      #container {
        width: 100% !important;
        max-width: none !important;
        flex: 1; /* Take remaining height */
        min-height: 0; /* Allow container to shrink */
      }

      /* Layout: stack on mobile, toolbar on the right for wider screens */
      .task-header {
        display: grid;
        gap: 12px;
      }
      @media (min-width: 720px) {
        .task-header {
          grid-template-columns: 1fr auto;
          grid-template-areas:
            'back actions'
            'title actions'
            'meta  actions';
          align-items: start;
        }
        .task-header .link-back {
          grid-area: back;
        }
        .task-header .title {
          grid-area: title;
        }
        .task-header .article__meta {
          grid-area: meta;
        }
        .task-header .task-toolbar {
          grid-area: actions;
        }
      }
      .task-toolbar {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        margin-left: auto; /* keeps it right-aligned when stacking */
      }
    `,
  ],
})
export class SolutionReviewedAcceptedPage implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit(): Promise<void> {
    // Only initialize Monaco Editor on the client side
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      // Dynamic import to avoid SSR issues
      const monaco = await import('monaco-editor');

      const originalModel = monaco.editor.createModel(
        /* set from `originalModel`: */ `hello world`,
        'text/plain'
      );
      const modifiedModel = monaco.editor.createModel(
        /* set from `modifiedModel`: */ `Hello World!`,
        'text/plain'
      );

      const diffEditor = monaco.editor.createDiffEditor(
        this.container.nativeElement,
        {
          originalEditable: true,
          automaticLayout: true,
          theme: 'vs-dark',
          readOnly: true,
        }
      );
      diffEditor.setModel({
        original: originalModel,
        modified: modifiedModel,
      });
    } catch (error) {
      console.error('Failed to initialize Monaco Editor:', error);
    }
  }
}
