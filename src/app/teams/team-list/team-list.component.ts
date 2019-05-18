import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TeamService } from '../../shared/services/team.service';
import { Team } from '../../shared/models/team.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

    teamList: Team[];

    constructor(private service: TeamService,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.service.getTeams().subscribe(actionArray => {
            this.teamList = actionArray.map(item => {
                return {
                    id: item.payload.doc.id,
                    ...item.payload.doc.data()
                } as Team;
            })
        })
    }

    selectTeam (team: Team) {
        // console.info(`ID: ${team.id}\nSchool: ${team.school}\nAbbrev.: ${team.abbreviation}`);
        this.service.teamData = Object.assign({}, team);
    }

    deleteTeam (id: string) {
        let error = this.service.deleteTeam(id);
        if (error) {
            this.toastr.error("There was an error deleting the Team", "Team Maintenance");            
        } else {
            this.toastr.success("Delete Successful", "Team Maintenance");
        }
    }

}
