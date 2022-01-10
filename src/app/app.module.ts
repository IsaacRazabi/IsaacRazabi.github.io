import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ElModule } from 'element-angular'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { reducers, metaReducers } from './store/store';
import { AppEffects } from './store/app.effects';

import { AppComponent } from './root-component/index';
import { HomeComponent } from './pages/home/home.component';
import { ItemAppComponent } from './pages/item-app/item-app.component';

import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ItemListComponent } from './cmps/item-list/item-list.component';
import { ItemPreviewComponent } from './cmps/item-preview/item-preview.component';
import { ItemEditComponent } from './cmps/item-edit/item-edit.component';
import { LoginComponent } from './cmps/login/login.component';
import { UserSettingComponent } from './cmps/user-setting/user-setting.component';

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    ItemAppComponent,
    ItemEditComponent,
    ItemListComponent,
    ItemPreviewComponent,
    LoginComponent,
    UserSettingComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDropzoneModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ElModule.forRoot(),
    
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
