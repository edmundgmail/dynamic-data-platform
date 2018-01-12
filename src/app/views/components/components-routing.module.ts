import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SQLSnippetComponent } from './sql.snippet.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Create Snippets'
    },
    children: [
      {
        path: 'sqlsnippet',
        component: SQLSnippetComponent,
        data: {
          title: 'SQL Snippet'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
