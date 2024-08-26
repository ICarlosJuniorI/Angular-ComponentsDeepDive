import { NgModule } from '@angular/core';

import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TicketsModule } from './tickets/tickets.module';

@NgModule({
  declarations: [
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
  ],
  imports: [TicketsModule],
  exports: [
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsModule,
  ],
})
export class DashboardModule {}
