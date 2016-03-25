///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../node_modules/rxjs/rx.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, Location, HashLocationStrategy} from 'angular2/router';
import {AppComponent} from './app.component'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);