import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {User} from '../models/user.model'

@Injectable()
export class UsersService {

    public onUsers: Rx.Subject<User[]>;

    constructor(private backend: FireBaseService) { 
        this.setupObservables();
        this.listenForIncomingEvents()
    }

    private setupObservables() {
        this.onUsers = new Rx.Subject<User[]>();
    }

    private listenForIncomingEvents() {
        this.backend.users.on(FireBaseService.VALUE, this.onUsersChanged);
    }

    private onUsersChanged(usersSnapshot: FirebaseDataSnapshot) {
        this.onUsers.onNext(usersSnapshot.val());
    }
}