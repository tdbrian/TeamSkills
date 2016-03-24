import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'hasSkills' })
export class HasSkills {
    transform(value, args) {
        var newValue = value.map((x: string) => {
            var skills = args[0];
            return {
                    value : x,
                    isSelected: skills.includes(x)
            }
        });
        return newValue;
    }
}