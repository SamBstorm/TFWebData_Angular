import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { DureeComponent } from './pages/duree/duree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { Page404Component } from './pages/404/404.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ToDollarPipe } from './pipes/to-dollar.pipe';
import { ConversionPipe } from './pipes/conversion.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { SlicePipe } from './pipes/slice.pipe';
import { FormdemoComponent } from './pages/formdemo/formdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DureeComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Page404Component,
    StepperComponent,
    ToDollarPipe,
    ConversionPipe,
    SlicePipe,
    FormdemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // gérer les formulaires simples
    FormsModule,
    // pas encore besoin sera vu plus tard
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    CardModule,
    FloatLabelModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
