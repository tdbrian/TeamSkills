import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CorrespondingViewItems} from '../_pipes/corresponding-view-items'

@Component({
    selector: 'view-list',
    templateUrl: 'app/viewTeam/_components/view-list.html', 
    pipes: [CorrespondingViewItems]
})
export class ViewList {
    @Input() list;
    @Input() filter;
    @Output() itemSelected = new EventEmitter();

    updateCorrespondingItems(item) {
        this.itemSelected.emit(item);
    }
}