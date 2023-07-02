import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavigationComponent } from './navigation/navigation.component'
import { provideEnvironmentNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
