import { NgModule } from '@angular/core';

import { SQLSnippetComponent } from './sql.snippet.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import {BsDropdownModule, ModalModule, TabsModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule
  ],
  declarations: [
    SQLSnippetComponent
  ]
})
export class ComponentsModule { }
