import { Component, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

import { PageService } from '../../app.service';
import { Page, Doc } from '../../app.interface';

declare let gtag: Function;

@Component({
  selector: '[main-component]',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @HostBinding('class') class;

  page: Page = { content: {} };
  menus: Array<Page>;
  docs: Array<Doc>;
  parent: Page = {};
  // docs: ArrayObject = {};

  constructor(private router: Router, private ps: PageService, private titleCase: TitleCasePipe) {
    this.ps.pages.subscribe((items: Array<Page>) => this.menus = items);
    this.ps.docs.subscribe((docs: Array<Doc>) => this.docs = docs);

    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        const paths = route.urlAfterRedirects.substr(1).split('?')[0].split('/');

        this.page = this.getPage(this.menus, paths);
        this.class = `category-${this.parent.url} page-${this.page.url}`;

        // this.page.content.info = (this.docs.find((item: Doc = {}) => item.tag === this.page.content.tag) || {}).props;
        // Is this a bad idea, it might lead to circular references.
        this.page.parent = this.parent;
        // console.log(this.page);

        document.title = this.titleCase.transform(`Scania Digital Design System | ${this.page.title}`);
        this.ps.setPage(this.page);

        this.analytics(route.url);
      }
    });
  }

  getPage(menus: Array<Page>, paths: Array<String>) {
    const path = paths.shift();
    const page = menus.find(sub => sub.url === path) || {};
    if(page.submenus && page.submenus.length > 0) {
      this.parent = page;

      return this.getPage(page.submenus, paths);
    }
    return page;
  }

  analytics(path) {
    if(typeof gtag === 'undefined') return;

    gtag('set', 'page', path);
    gtag('send', 'pageview');
  }
}
