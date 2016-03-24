import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {HasSkills} from '../_pipes/has-skills';

@Component({
    selector: 'manage-list',
    templateUrl: 'app/manageSkills/_components/manage-list.html',
    pipes: [HasSkills]
})
export class ManageList {
    @Input() list;
    @Input() userItems;
    @Output() itemSelected = new EventEmitter();
    
    addOrRemoveItem(item) {
        this.itemSelected.emit(item);
    }
}

