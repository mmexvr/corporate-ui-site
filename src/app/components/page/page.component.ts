import { Component } from '@angular/core';

import { PageService } from '../../app.service';
import { Page, Template, Section } from '../../app.interface';

import { default as templates } from '../../data/templates.json';

@Component({
  template: templates.map((item: Template) => `
    <ng-template [ngIf]='template.id === ${item.id}'>
      ${item.sections.map((sub: Section) => sub.content).join('')}
    </ng-template>
  `).join(''),
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  item: Page;
  template: Object;

  constructor(public ps: PageService) {
    this.ps.page.subscribe((item: Page) => {
      if(!item.id) return;

      // console.log(item);
      this.item = item;
      this.template = this.getTemplate(item.content.template);
    });
  }

  getTemplate(id: Number) {
    return templates.find(item => item.id === id) || {};
  }
}