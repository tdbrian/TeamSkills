import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {User} from '../models/user.model'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UsersService {

    private usersRepo: Firebase;
    public users: User[] = [];

    constructor(private backend: FireBaseService) {
        this.usersRepo = backend.users;
        this.listenForIncomingEvents()
    }

    private listenForIncomingEvents() {
        this.usersRepo.on(FireBaseService.VALUE, this.onUsersChanged);
    }

    private onUsersChanged = (usersSnapshot: FirebaseDataSnapshot) => {
        let usersObj = usersSnapshot.val()
        this.users = Object.keys(usersObj).map(function (key) { return usersObj[key] });
        console.info(this.users);
    }
}