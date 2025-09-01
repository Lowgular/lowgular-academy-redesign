import { Routes } from '@angular/router';
import { ContentItemArticlePage } from './pages/content-item-article.page';
import { ContentItemSequencePage } from './pages/content-item-sequence.page';
import { CourseDetailPage } from './pages/course-detail.page';
import { CourseFullWrapperPage } from './pages/course-full-wrapper.page';
import { CourseWrapperPage } from './pages/course-wrapper.page';
import { DesignSystemPage } from './pages/design-system.page';
import { SolutionSelfReviewPage } from './pages/solution-self-review.page';
import { TaskFirstPulledPage } from './pages/task-first-pulled.page';
import { TaskFirstPage } from './pages/task-first.page';

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
      {
        path: 'task/1',
        component: TaskFirstPage,
      },
      {
        path: 'task/1/pulled',
        component: TaskFirstPulledPage,
      },
    ],
  },
  {
    path: 'course-detail',
    component: CourseFullWrapperPage,
    children: [
      {
        path: 'solution/self-review',
        component: SolutionSelfReviewPage,
      },
    ],
  },
];
