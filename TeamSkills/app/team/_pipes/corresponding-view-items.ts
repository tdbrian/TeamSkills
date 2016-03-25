import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'correspondingViewItems' })
export class CorrespondingViewItems {
    transform(value, args) {
        var filter = args[0];
        switch (filter.type) {
            return value;
        }
    }
}