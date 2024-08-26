import { NgModule } from '@angular/core';

import { TicketsComponent } from './tickets.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TicketsComponent, TicketComponent, NewTicketComponent],
  exports: [TicketsComponent, TicketComponent, NewTicketComponent],
  imports: [SharedModule],
})
export class TicketsModule {}
