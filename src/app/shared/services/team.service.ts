import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';  // Firebase modules for Database, Data list and Single object
import { Team, Conferences, Regions } from '../models/team.model';
// import { database } from 'firebase';
// import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Injectable({
    providedIn: 'root'
})

export class TeamService {    

    teamData: Team;

    constructor(private firestore: AngularFirestore) { }

    getTeams() {
        return this.firestore.collection('teams').snapshotChanges();
    }

    addUpdateTeam(team: Team): any {
        this.teamData = Object.assign({}, team);
        delete this.teamData.id;
        if (team.id == null || team.id === "") {
            this.firestore.collection('teams').add(this.teamData)
                .then(docRef => {
                    return;
                })
                .catch(error => {
                    return error;
                })
        } else {
            this.firestore.doc(`teams/${team.id}`).update(this.teamData)
                .then(() => {
                    return;
                })
                .catch(error => {
                    return error;
                })
        }
    }

    deleteTeam (id: string): any {
        if (confirm("Are you sure you wish to delete this team?")) {

            this.firestore.doc(`teams/${id}`).delete()
                .then(() => {
                    return;
                })
                .catch(error => {
                    return error;
                })
        }
        return;
    }
}
