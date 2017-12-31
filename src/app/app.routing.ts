import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VersionComponent } from './version/version.component';


const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'version',        component: VersionComponent },    
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'ui',               redirectTo: 'dashboard', pathMatch: 'full' }
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
