import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './teams/team/team.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameTeamsComponent } from './games/game/game-teams/game-teams.component';
import { GameTeamComponent } from './games/game/game-teams/game-team/game-team.component';
import { GameTeamListComponent } from './games/game/game-team/game-team-list/game-team-list.component';
import { GoalScorersComponent } from './games/game/game-teams/game-team/goal-scorers/goal-scorers.component';
import { GoaltendersComponent } from './games/game/game-teams/game-team/goaltenders/goaltenders.component';
import { GoalScorerComponent } from './games/game/game-teams/game-team/goal-scorers/goal-scorer/goal-scorer.component';
import { GoalScorerListComponent } from './games/game/game-teams/game-team/goal-scorers/goal-scorer-list/goal-scorer-list.component';
import { GoaltenderComponent } from './games/game/game-teams/game-team/goaltenders/goaltender/goaltender.component';
import { GoaltenderListComponent } from './games/game/game-teams/game-team/goaltenders/goaltender-list/goaltender-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent,
    TeamListComponent,
    GamesComponent,
    GameComponent,
    GameListComponent,
    GameTeamsComponent,
    GameTeamComponent,
    GameTeamListComponent,
    GoalScorersComponent,
    GoaltendersComponent,
    GoalScorerComponent,
    GoalScorerListComponent,
    GoaltenderComponent,
    GoaltenderListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
