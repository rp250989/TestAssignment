import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerificationCompComponent } from './verification-comp/verification-comp.component';
import { VerificationChildComponent } from './verification-child/verification-child.component';

@NgModule({
  declarations: [
    AppComponent,
    VerificationCompComponent,
    VerificationChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
