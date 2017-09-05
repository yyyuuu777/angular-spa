import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
