import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './containers/landing/landing.component';
import { AngularPerfComponent } from './containers/angular-perf/angular-perf.component';
import { MixedPerfComponent } from './containers/mixed-perf/mixed-perf.component';
import { FabricComponent } from './containers/fabric/fabric.component';
import { MaterialComponent } from './containers/material/material.component';


const routes: Routes = [
    { path: 'landing', redirectTo: '' },
    { path: '', component: LandingComponent },
    { path: 'perf', children: [
      { path: 'angular', component: AngularPerfComponent },
      { path: 'mixed', component: MixedPerfComponent },
    ] },
    { path: 'components', children: [
      { path: 'fabric', component: FabricComponent },
      { path: 'material', component: MaterialComponent },
    ] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }