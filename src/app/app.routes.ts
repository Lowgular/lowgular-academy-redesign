import { Routes } from '@angular/router';
import { CourseDetailPage } from './pages/course-detail.page';
import { DesignSystemPage } from './pages/design-system.page';

export const routes: Routes = [
  {
    path: '',
    component: DesignSystemPage,
  },
  {
    path: 'course-detail',
    component: CourseDetailPage,
  },
];
