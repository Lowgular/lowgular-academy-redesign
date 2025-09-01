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
  templateUrl: './solution-merged.page.html',
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
    `,
  ],
})
export class SolutionMergedPage implements AfterViewInit {
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
