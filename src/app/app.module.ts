import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResourcesComponent } from './components/add-resources/add-resources.component';
import { TranslateLoader , TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { ResourceAvailabilityComponent } from './components/resource-availability/resource-availability.component';
import { WorkingTimeComponent } from './components/working-time/working-time.component';
import { ResourseNavComponent } from './components/resourse-nav/resourse-nav.component';

export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http)
}
@NgModule({
  declarations: [
    AppComponent,
    AddResourcesComponent,
    ResourceDetailsComponent,
    ResourceAvailabilityComponent,
    WorkingTimeComponent,
    ResourseNavComponent,
  ],
  imports: [
    [FormsModule],
    BrowserModule,
    [MatSlideToggleModule],
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoader,
        deps:[HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
