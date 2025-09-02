import { Routes } from '@angular/router';
import { ContentItemArticlePage } from './pages/content-item-article.page';
import { ContentItemSequencePage } from './pages/content-item-sequence.page';
import { CourseDetailNoAchievementsPage } from './pages/course-detail-no-achievements.page';
import { CourseDetailPage } from './pages/course-detail.page';
import { CourseFullWrapperPage } from './pages/course-full-wrapper.page';
import { CourseWrapperPage } from './pages/course-wrapper.page';
import { DesignSystemPage } from './pages/design-system.page';
import { SolutionMergedPage } from './pages/solution-merged.page';
import { SolutionRequestedReviewPage } from './pages/solution-requested-review.page';
import { SolutionReviewedAcceptedPage } from './pages/solution-reviewed-accepted.page';
import { SolutionReviewedImprovementPage } from './pages/solution-reviewed-improvement.page';
import { SolutionReviewedRejectedPage } from './pages/solution-reviewed-rejected.page';
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
        path: 'no-achievements',
        component: CourseDetailNoAchievementsPage,
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
      {
        path: 'solution/requested-review',
        component: SolutionRequestedReviewPage,
      },
      {
        path: 'solution/merged',
        component: SolutionMergedPage,
      },
      {
        path: 'solution/reviewed/accepted',
        component: SolutionReviewedAcceptedPage,
      },
      {
        path: 'solution/reviewed/improvement',
        component: SolutionReviewedImprovementPage,
      },
      {
        path: 'solution/reviewed/rejected',
        component: SolutionReviewedRejectedPage,
      },
    ],
  },
];
