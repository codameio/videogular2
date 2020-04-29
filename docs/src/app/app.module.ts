import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VgCoreModule } from '../../../src/core/core';
import { VgBufferingModule } from '../../../src/buffering/buffering';
import { VgOverlayPlayModule } from '../../../src/overlay-play/overlay-play';
import { VgControlsModule } from '../../../src/controls/controls';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
