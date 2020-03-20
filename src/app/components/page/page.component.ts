import { Component } from '@angular/core';

import { PageService } from '../../app.service';
import { Page, Template } from '../../app.interface';

import { templates } from '../../data/templates.json';
import { menus } from '../../data/content.json';

declare let gtag: Function;

/*
TODO: add possbility to send link direkt connected with tab - button#style
TODO: Indexing the tab menu from the database
FIXME: Add disabled state
FIXME: title should fetch from the template not direct in the html, h1 for homepage needs to be removed now
*/

@Component({
  template: `
  <h1 *ngIf="!content.title.includes('Home')">{{content.title}}</h1>
  <ul *ngIf="content.contents.length > 1" class="nav" id="myTab">` +
  templates.map((page: Template) => `
    <li *ngIf="templateCheck(${page.id})" class='nav-item'>
      <a class='nav-link' data-toggle='tab' (click)="tabChange(content, '${page.title}')" [ngClass]="dynamicActiveState(${page.id}, active)" href='#section-${page.id}'> ${page.title} </a>
    </li>
  `).join('')
  + "</ul>" +
  "<div class='tab-content'>" +
  templates.map((page: Template) => `
    <section [ngClass]="dynamicActiveState(${page.id}, active)" class="tab-pane ${page.id}" id='section-${page.id}'>
      <div class="content-wrapper" *ngFor='let item of content.contents'>
        <ng-template [ngIf]='"${page.id}" == item.template.id'>
        ${page.text}
        </ng-template>
      </div>
    </section>
  `).join('')
  + '</div>',
  styleUrls: ['./page.component.scss']
})

export class PageComponent {
  content: any = {};
  result: boolean;
  templates: any = {};
  unique: any;
  unique2: any;
  active: any;
  constructor(public ps: PageService) {
    this.ps.page.subscribe((page: Page) => {

      // FIXME: Improve the if statement for page.id and page.parent.id
      if(page.id){
        this.content = menus.find(menu => menu.id === page.id);

        // For sovling the unique id and title for every template
        var element = {};
        this.unique = [...new Set(this.content.contents.map(contentItem => {
          element = contentItem.template.title;
          return element;
        }))]
        var element2 = {};
        this.unique2 = [...new Set(this.content.contents.map(contentItem => {
          element2 = contentItem.template.id;
          return element2;
        }))]
        // The id needs to be sorted since the database is unsorted right now
        this.unique2.sort()
        // Set active for the first available template
        this.active = this.unique2[0];

      } else if(page.parent)  {
        this.content = menus.find(menu => menu.id === page.parent.id);
        // Works the same way as previous if statement
        var element = {};
        this.unique = [...new Set(this.content.contents.map(contentItem => {
          element = contentItem.template.title;
          return element;
        }))]
        this.unique2 = [...new Set(this.content.contents.map(contentItem => {
          element2 = contentItem.template.id;
          return element2;
        }))]

        this.unique;
        this.unique2.sort();
        this.active = this.unique2[0]

      } else {
        return;
      }
    });
  }

  ngOnInit() {
    // TODO: Would be nice if we could use this instead. But then we
    // need to figure out a way to let us know when this $ is available

    // let $ = window.CorporateUi.$;
    // $(() => {
    //   $('a[data-toggle="tab"]').on('shown.bs.tab', (e) => {
    //     console.log(
    //       e.target, // newly activated tab
    //       e.relatedTarget // previous active tab
    //     );
    //     this.tabChange();
    //   });
    // });
  }

  // Set active class on element
  dynamicActiveState(page, activePage) {
    if(page == activePage){
      return {
        active: true
      }
    } else {
      return {
        active: false
      }
    }

    if(page == activePage) return true

  }

  // Checking to find unique id for template
  templateCheck(pageid) {
    let templateid = this.content.contents.find(item => item.template.id == pageid)
    return templateid;
  }

  tabChange(page, tabTitle) {
    gtag('send', 'event', {
      eventCategory: 'Page',
      eventAction: 'TabChange',
      eventLabel: page.title,
      eventValue: tabTitle
    });
  }
}