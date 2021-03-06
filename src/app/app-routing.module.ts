import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';

import { PageService } from './app.service';
import { EscapeHtmlPipe, SplitPipe, MarkdownPipe, SortASCPipe, DatePipe } from './app.pipe';

import { PageComponent } from './components/page/page.component';
import { ModalComponent } from './components/modal/modal.component';
import { TogglerComponent } from './components/toggler/toggler.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { IconListComponent } from './components/icon-list/icon-list.component';
import { CodeExampleComponent } from './components/code-example/code-example.component';

@NgModule({
  declarations: [
    DatePipe,
    EscapeHtmlPipe,
    SplitPipe,
    SortASCPipe,
    MarkdownPipe,
    PageComponent,
    ModalComponent,
    TogglerComponent,
    ColorListComponent,
    IconListComponent,
    CodeExampleComponent
  ],
  entryComponents: [PageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  exports: [
    RouterModule,
    DatePipe,
    MarkdownPipe,
    SortASCPipe,
    TogglerComponent
  ],
  providers: [
    PageService,
    TitleCasePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {

  constructor(private router: Router, private ps: PageService) {
    this.ps.pages.subscribe(items => {
      const routes = this.contentToRoute(items);

      this.router.resetConfig([
        ...routes,
        { path: '**', redirectTo: '/home' }
      ]);

      this.ps.setRoutes(routes);
    });

    // TODO: We could also handle the data over here but I 
    // think doing it in the service makes more sense

    // this.ps.navigations.subscribe(items => {
    //   let pages = [];
    //   items.map(item => pages = [ ...pages, ...item.menus ]);

    //   const routes = this.contentToRoute(pages);

    //   this.router.resetConfig([
    //     ...routes,
    //     { path: '**', redirectTo: '/home' }
    //   ]);

    //   this.ps.setRoutes(routes);
    // });
  }

  contentToRoute(items) {
    return items.reduce((accumulator, item, index) => {
      let route:any = { path: item.url, component: PageComponent };

      if(item.submenus) route.children = this.contentToRoute(item.submenus);

      let routes = [ route ];
      // Keep this comment for investigating purpose regarding route.path, this doesn't work for parent route
      // if(!index) routes.unshift({ path: '', redirectTo: route.path, pathMatch: 'full' });

      return accumulator.concat(routes);
    }, []);
  }
}