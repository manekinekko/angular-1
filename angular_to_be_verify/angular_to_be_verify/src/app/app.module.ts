import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/NavBar/navbar.component';
import { FooterComponent } from './components/Footer/footer.component';
import {Master_DetailModule} from './components/Master_Detail/Master_Detail.module';
import {ListModule} from './components/List/List.module';
import {GridModule} from './components/Grid/Grid.module';
import {BlankModule} from './components/Blank/Blank.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Master_DetailModule,
    ListModule,
    GridModule,
    BlankModule,
    RouterModule.forRoot([
      { path: '**', redirectTo: 'Blank'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
