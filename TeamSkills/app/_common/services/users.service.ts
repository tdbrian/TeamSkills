import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {User} from '../models/user.model'

@Injectable()
export class UsersService {

    private usersRepo: Firebase;
    public onUsers: Rx.Subject<User[]>;

    constructor(private backend: FireBaseService) {
        this.usersRepo = backend.users;
        this.setupObservables();
        this.listenForIncomingEvents()
    }

    private setupObservables() {
        this.onUsers = new Rx.Subject<User[]>();
    }

    private listenForIncomingEvents() {
        this.usersRepo.on(FireBaseService.VALUE, this.onUsersChanged);
    }

    private onUsersChanged(usersSnapshot: FirebaseDataSnapshot) {
        this.onUsers.onNext(usersSnapshot.val());
    }
}