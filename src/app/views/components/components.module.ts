import { NgModule } from '@angular/core';

import { SQLSnippetComponent } from './sql.snippet.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import {BsDropdownModule, ModalModule, TabsModule} from "ngx-bootstrap";
import {TabsComponent} from "../../components/tabs/tabs.component";

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    TabsComponent
  ],
  declarations: [
    SQLSnippetComponent
  ]
})
export class ComponentsModule { }
