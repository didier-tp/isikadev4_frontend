import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsUtilModule } from 'src/bs-util/bs-util.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    TabsModule.forRoot(),
    BsUtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
