import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PR } from 'src/app/types/pr';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})

export class DataService {

constructor(private firestore: AngularFirestore, private auth: AuthService, private storage: Storage) {
}

getPr(user: string, id: string): Observable<PR>{
  return this.firestore.collection("users").doc(user).collection("prs").doc<PR>(id).valueChanges();
}

editPr(user: string, id: string, new_name: string, new_reps: number, new_weight: number){
  this.firestore.collection("users").doc(user).collection("prs").doc<PR>(id).update({
    name: new_name,
    reps: new_reps,
    weight: new_weight,
  })
  console.log(new_name+ " " + new_reps + " " + new_weight)
}

async create(pr: PR){
  const user = await this.auth.getCurrentUser();
  console.log(pr);
  return new Promise<any> ((res, rej) =>{
    this.firestore
    .collection("users").doc(user.uid).collection("prs").add(pr);
  });
}

  public getPrs(id: string): Observable<PR[]>{
      return this.firestore.collection("users").doc(id).collection<PR>("prs").snapshotChanges().pipe(map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as PR;
        const id = a.payload.doc.id;
        return {id, ... data};
      })));
  }

  deletePr(user: string, id:string){
    this.firestore.collection("users").doc(user).collection("prs").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }

 async checkExistance(user: string, id:string): Promise<boolean>{
   const doc = this.firestore.collection("users").doc(user).collection("prs").doc<PR>(id).ref;
   var exists: boolean = false;
      return doc.get().then((d) =>{
        if (d.exists){
        exists = true;
        }
        else{
        exists = false;
        }
        return exists;
      });
  }
}


