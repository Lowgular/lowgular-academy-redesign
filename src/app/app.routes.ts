import { Routes } from '@angular/router';
import { ContentItemArticlePage } from './pages/content-item-article.page';
import { ContentItemSequencePage } from './pages/content-item-sequence.page';
import { CourseDetailPage } from './pages/course-detail.page';
import { CourseWrapperPage } from './pages/course-wrapper.page';
import { DesignSystemPage } from './pages/design-system.page';

export const routes: Routes = [
  {
    path: '',
    component: DesignSystemPage,
  },
  {
    path: 'course-detail',
    component: CourseWrapperPage,
    children: [
      {
        path: '',
        component: CourseDetailPage,
      },
      {
        path: 'content-item-article',
        component: ContentItemArticlePage,
      },
      {
        path: 'content-item-sequence',
        component: ContentItemSequencePage,
      },
    ],
  },
];
