import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModuleComponent } from './module/module.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureRequestComponent } from './feature-request/feature-request.component';


@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    FeatureComponent,
    FeatureRequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
