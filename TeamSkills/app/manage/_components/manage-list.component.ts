import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {SelectedValues} from '../_pipes/selected-values.pipe';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { Rating } from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: 'manage-list',
    templateUrl: 'app/manage/_components/manage-list.html',
    pipes: [SelectedValues],
    directives: [Rating, FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ManageList {
    @Input() list;
    @Input() userItems;
    @Output() itemSelected = new EventEmitter();
    
    addOrRemoveItem(ratedItem) {
        this.itemSelected.emit(ratedItem);
    }

    userHasItem(name) {
        if (this.userItems) {
            return this.userItems.map(x => {
                if (x.skill) return x.skill.name;
                else if (x.project) return x.project.name;
            }).includes(name);
        }
    }
    private max: number = 5;
    private isReadonly: boolean = false;

    private overStar: number;
    private percent: number;

    private ratingStates: any = [
        { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
        { stateOn: 'glyphicon-heart' },
        { stateOff: 'glyphicon-off' }
    ];

    private hoveringOver(value: number): void {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };

    private resetStar() {
        this.overStar = null;
    }
}

