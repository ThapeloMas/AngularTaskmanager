import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './todolist/app-routing.module';
import { RegisterComponent } from './todolist/register/register.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AppComponent } from './app.component';
  import { LoginComponent } from './todolist/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodolistComponent
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
