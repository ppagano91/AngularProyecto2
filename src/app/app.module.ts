import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { UncleComponent } from './components/uncle/uncle.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [AppComponent, ChildComponent, ParentComponent, UncleComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
