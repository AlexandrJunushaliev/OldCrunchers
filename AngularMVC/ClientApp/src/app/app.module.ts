import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {CounterComponent} from './counter/counter.component';
import {FetchDataComponent} from './fetch-data/fetch-data.component';
import {UserAccountComponent} from "./user-account/user-account.component";
import {LoginComponent} from "./login/login.component";
import {SearchComponent} from "./search/search.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CategorySidenavComponent} from "./category-sidenav/category-sidenav.component";
import { BasicAuthInterceptor } from './services/basic-auth-interceptor';
import {AuthGuard} from "./services/auth-guard";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UserAccountComponent,
    LoginComponent,
    SearchComponent,
    CategorySidenavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'counter', component: CounterComponent},
      {path: 'fetch-data', component: FetchDataComponent, canActivate:[AuthGuard]},
      {path: 'account', component: UserAccountComponent,canActivate:[AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'search', component: SearchComponent}
    ]),
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },],
  bootstrap: [CategorySidenavComponent]
})
export class AppModule {
}
