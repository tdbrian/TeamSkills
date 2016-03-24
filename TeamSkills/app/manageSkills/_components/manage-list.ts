﻿import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {SelectedValues} from '../_pipes/selected-values';

@Component({
    selector: 'manage-list',
    templateUrl: 'app/manageSkills/_components/manage-list.html',
    pipes: [SelectedValues]
})
export class ManageList {
    @Input() list;
    @Input() userItems;
    @Output() itemSelected = new EventEmitter();
    
    addOrRemoveItem(name) {
        var newItem = {
            name: name,
            isSelected: this.userItems.map(x => x.name).includes(name)
        }
        this.itemSelected.emit(newItem);
    }
}

