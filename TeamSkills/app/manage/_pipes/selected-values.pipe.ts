import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'selectedValues' })
export class SelectedValues {
    transform(value, args) {
        var itemList = args[0].map(x => x.name);
        var newValue = value.map((item) => {
            return {
                name: item.name,
                isSelected: itemList.includes(item.name)
            }
        });
        return newValue;
    }
}