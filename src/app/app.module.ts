import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { TestDirectionComponent } from './components/test-direction/test-direction.component';
import { ModulesComponent } from './components/modules/modules.component';
import { ModuleDescriptionComponent } from './components/module-description/module-description.component';
import { McqTestComponent } from './components/mcq-test/mcq-test.component';
import { EssayTestComponent } from './components/essay-test/essay-test.component';
import { AutomataTestComponent } from './components/automata-test/automata-test.component';
import { ModuleCompletedComponent } from './components/module-completed/module-completed.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { ComprehensionComponent } from './components/comprehension/comprehension.component';
import { ChartComponent } from './components/chart/chart.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestFormsComponent } from './components/test-forms/test-forms.component';
import { IndexComponent } from './components/index/index.component';
import { MockInterviewComponent } from './components/mock-interview/mock-interview.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotesComponent } from './components/notes/notes.component';

import { TcsComponent } from './components/company/tcs/tcs.component';
import { CognizantComponent } from './components/company/cognizant/cognizant.component';
import { WiproComponent } from './components/company/wipro/wipro.component';
import { InfosysComponent } from './components/company/infosys/infosys.component';
import { AccentureComponent } from './components/company/accenture/accenture.component';
import { CapgeminiComponent } from './components/company/capgemini/capgemini.component';

import { SyllabusAccentureComponent } from './components/syllabus/syllabus-accenture/syllabus-accenture.component';
import { SyllabusCapgeminiComponent } from './components/syllabus/syllabus-capgemini/syllabus-capgemini.component';
import { SyllabusCognizantComponent } from './components/syllabus/syllabus-cognizant/syllabus-cognizant.component';
import { SyllabusInfosysComponent } from './components/syllabus/syllabus-infosys/syllabus-infosys.component';
import { SyllabusTcsComponent } from './components/syllabus/syllabus-tcs/syllabus-tcs.component';
import { SyllabusWiproComponent } from './components/syllabus/syllabus-wipro/syllabus-wipro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionsComponent,
    CreateTestComponent,
    TestDirectionComponent,
    ModulesComponent,
    ModuleDescriptionComponent,
    McqTestComponent,
    EssayTestComponent,
    AutomataTestComponent,
    ModuleCompletedComponent,
    FormatTimePipe,
    ComprehensionComponent,
    ChartComponent,
    AdminComponent,
    TestFormsComponent,
    IndexComponent,
    MockInterviewComponent,
    HeaderComponent,
    FooterComponent,
    NotesComponent,
    TcsComponent,
    CognizantComponent,
    WiproComponent,
    InfosysComponent,
    AccentureComponent,
    CapgeminiComponent,
    SyllabusAccentureComponent,
    SyllabusCapgeminiComponent,
    SyllabusCognizantComponent,
    SyllabusInfosysComponent,
    SyllabusTcsComponent,
    SyllabusWiproComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
