import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestFormsComponent } from './components/test-forms/test-forms.component';
import { IndexComponent } from './components/index/index.component';
import { MockInterviewComponent } from './components/mock-interview/mock-interview.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { NotesComponent } from './components/notes/notes.component';

import { AccentureComponent } from "./components/company/accenture/accenture.component";
import { CapgeminiComponent } from "./components/company/capgemini/capgemini.component";
import { CognizantComponent } from "./components/company/cognizant/cognizant.component";
import { InfosysComponent } from "./components/company/infosys/infosys.component";
import { TcsComponent } from "./components/company/tcs/tcs.component";
import { WiproComponent } from "./components/company/wipro/wipro.component";



const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'mock-interview', component: MockInterviewComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'add-questions', component: TestFormsComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'company/accenture', component: AccentureComponent },
  { path: 'company/capgemini', component: CapgeminiComponent },
  { path: 'company/cognizant', component: CognizantComponent },
  { path: 'company/infosys', component: InfosysComponent },
  { path: 'company/tcs', component: TcsComponent },
  { path: 'company/wipro', component: WiproComponent },

  // Add new paths above
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
