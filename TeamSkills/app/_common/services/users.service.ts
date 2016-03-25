import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {User} from '../models/user.model'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UsersService {

    private usersRepo: Firebase;
    public onUsers = new Subject<User[]>();

    constructor(private backend: FireBaseService) {
        this.usersRepo = backend.users;
        this.listenForIncomingEvents()
    }

    private listenForIncomingEvents() {
        this.usersRepo.on(FireBaseService.VALUE, this.onUsersChanged);
    }

    private onUsersChanged(usersSnapshot: FirebaseDataSnapshot) {
        this.onUsers.next(usersSnapshot.val());
    }
}