import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
    
    // users: User[];
    users: User[] = [
        new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
    ];

    userSubjsect = new Subject<User[]>();

    emitUsers() {
        // doc: https://github.com/ReactiveX/rxjs/blob/master/doc/subject.md
        this.userSubjsect.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}