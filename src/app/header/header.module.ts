import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ButtonComponent } from '../shared/button/button.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [SharedModule],
})
export class HeaderModule {}
