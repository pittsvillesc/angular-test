import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Regions, Conferences, Team } from '../../shared/models/team.model';
import { TeamService } from '../../shared/services/team.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    
    constructor(
        public service: TeamService,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.service.teamData = {
            id: null,
            school: '',
            teamName: '',
            abbreviation: '',
            conference: '',
            region: '',
        }
    }

    submitForm(form: NgForm) {
        let error = this.service.addUpdateTeam(form.value);
        if (error) {
            this.toastr.error(`There was an error saving your request: ${error}`);
        } else {
            this.toastr.success("Team successfully saved!");
            this.resetForm(form);
        }
            
    }

}
