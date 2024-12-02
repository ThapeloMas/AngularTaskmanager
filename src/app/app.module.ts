// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './todolist/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './todolist/login/login.component';
import { RegisterComponent } from './todolist/register/register.component';
import { TodolistComponent } from './todolist/todolist.component';

import { AuthService } from './services/auth.service';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }