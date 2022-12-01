import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsPageComponent } from './components/job-details-page/job-details-page.component';
import { JobsPageComponent } from './components/jobs-page/jobs-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/jobs', pathMatch: 'full'},
  {path: 'jobs', component: JobsPageComponent },
  {path: 'jobs/:jobId', component: JobDetailsPageComponent},
  // {path: '**', component: ErrorMessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
