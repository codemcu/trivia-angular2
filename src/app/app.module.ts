import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';

import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContainerComponent } from './components/container/container.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ContainerComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
