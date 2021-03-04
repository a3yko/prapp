import { Injectable } from '@angular/core';

import { User } from 'src/app/types/user';
import { Router } from '@angular/router';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.afAuth.setPersistence("session"); 
  }

  async login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password); 
  }

  async logout() {
    this.afAuth.signOut(); 
    this.router.navigate(['/login']);
  }

  async signUp(email: string, password: string, first: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
      const newUser: User = {
        first,
        email,
        uid: result.user.uid
      };

      this.setUserData(newUser); 
    }); 
  }
  setUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`); 

    return userRef.set(user, {
      merge: true
    });
  }

getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}



