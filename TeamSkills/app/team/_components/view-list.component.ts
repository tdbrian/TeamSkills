import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { Rating } from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: 'view-list',
    templateUrl: 'app/team/_components/view-list.html', 
    directives: [Rating, FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ViewList {
    @Input() title;
    @Input() list;
    @Input() filter;
    @Output() itemSelected = new EventEmitter();

    updateCorrespondingItems(item) {
        this.itemSelected.emit(item);
    }
    
    private max: number = 5;
    private isReadonly: boolean = true;

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

