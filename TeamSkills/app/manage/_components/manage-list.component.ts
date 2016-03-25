import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {SelectedValues} from '../_pipes/selected-values.pipe';

@Component({
    selector: 'manage-list',
    templateUrl: 'app/manage/_components/manage-list.html',
    pipes: [SelectedValues]
})
export class ManageList {
    @Input() list;
    @Input() userItems;
    @Output() itemSelected = new EventEmitter();
    
    addOrRemoveItem(name) {
        this.itemSelected.emit(name);
    }

    userHasItem(name) {
        if (this.userItems) {
            return this.userItems.map(x => {
                if (x.skill) return x.skill.name;
                else if (x.project) return x.project.name;
            }).includes(name);
        }
    }
}

