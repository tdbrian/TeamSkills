import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'selectedValues' })
export class SelectedValues {
    transform(value, args) {
        if (value && args[0]) {
            var itemList = args[0];
            var newValue = value.map((item) => {
                var thisItem = itemList.filter(y => y.name == item.name)[0];
                return {
                    name: item.name,
                    rating: thisItem === null || thisItem === undefined ? 0 : thisItem.level
                }
            });
            return newValue;
        } else {
            return value;
        }
    }
}