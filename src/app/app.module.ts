import { PasswordStrengthBar } from './models/passwordStrength';
import { environment } from './../environments/environment.prod';
import { messageDialog } from './models/dialogMessage';


import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeSignUpComponent } from './pages/employee-sign-up/employee-sign-up.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';

import { EmployeeLoginComponent } from './pages/employee-login/employee-login.component';
import { EmployerSignupComponent } from './pages/employer-signup/employer-signup.component';
import { ApplicantDashboardComponent } from './pages/applicant-dashboard/applicant-dashboard.component';
import { SignupAsComponent } from './pages/signup-as/signup-as.component';
import { JsSideBarComponent } from './pages/jobseekers/js-side-bar/js-side-bar.component';
import { MainJobPageComponent } from './pages/jobseekers/main-job-page/main-job-page.component';
import { ProfileComponent } from './pages/jobseekers/profile/profile.component';
import { JsProfileSideBarComponent } from './pages/jobseekers/js-profile-side-bar/js-profile-side-bar.component';
import { WorkHistoryComponent } from './pages/jobseekers/work-history/work-history.component';
import { EducationHistoryComponent } from './pages/jobseekers/education-history/education-history.component';
import { CertificatesComponent } from './pages/jobseekers/certificates/certificates.component';
import { EmergencyInfoComponent } from './pages/jobseekers/emergency-info/emergency-info.component';
import { JsRightSidebarComponent } from './pages/jobseekers/js-right--sidebar/js-right--sidebar.component';
import { ProfileOverviewComponent } from './pages/jobseekers/profile-overview/profile-overview.component';
import { MessagesComponent } from './pages/jobseekers/messages/messages.component';
import { OngoingjobsComponent } from './pages/jobseekers/ongoingjobs/ongoingjobs.component';
import { DocumentsComponent } from './pages/jobseekers/documents/documents.component';
import { ChecklistComponent } from './pages/jobseekers/checklist/checklist.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { EmployerDashboardComponent } from './pages/employers/employer-dashboard/employer-dashboard.component';
import { EmployerMainSidebarComponent } from './pages/employers/employer-main-sidebar/employer-main-sidebar.component';
import { EmmployerChecklistComponent } from './pages/employers/emmployer-checklist/emmployer-checklist.component';
import { SingleJobDetailsComponent } from './pages/employers/single-job-details/single-job-details.component';
import { PostJobsComponent } from './pages/employers/post-jobs/post-jobs.component';
import { EmployerChecklistComponent } from './pages/employers/employer-checklist/employer-checklist.component';
import { EmployerProfileComponent } from './pages/employers/employer-profile/employer-profile.component';
import { EmployerMessagesComponent } from './pages/employers/employer-messages/employer-messages.component';
import { JobApplicationsComponent } from './pages/employers/job-applications/job-applications.component';
import { ContractedjobsComponent } from './pages/employers/contractedjobs/contractedjobs.component';
import { FindcandidatesComponent } from './pages/employers/findcandidates/findcandidates.component';
import { PaymentsComponent } from './pages/employers/payments/payments.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminSideBarComponent } from './pages/admin/admin-side-bar/admin-side-bar.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DialogOverviewExampleComponent,DialogOverviewExampleDialog} from './dialog-overview-example/dialog-overview-example.component';
import 'hammerjs';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { ApproveUsersComponent } from './pages/admin/approve-users/approve-users.component';
import { AdminPaymentsComponent } from './pages/admin/admin-payments/admin-payments.component';
import { AdminTablePaymentsComponent } from './pages/admin/admin-table-payments/admin-table-payments.component';
import { AdminJobSeekersComponent } from './pages/admin/admin-job-seekers/admin-job-seekers.component';
import { AdminEmployersComponent } from './pages/admin/admin-employers/admin-employers.component';
import { AdminMessagesComponent } from './pages/admin/admin-messages/admin-messages.component';
import { MessagesModalComponent } from './dialog/messages-modal/messages-modal.component';
import { BanModalComponent } from './dialog/ban-modal/ban-modal.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { TestserviceService } from './services/testservice.service';
import { SignupService } from './services/signup/signup.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastComponent } from './dialog/toast/toast.component';
import { UserStateService } from './services/user-state.service';
import { EmployeeProfileService } from './services/profile-employee/employee-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSignUpComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,

    ApplicationFormComponent,

    EmployeeLoginComponent,

    EmployerSignupComponent,

    ApplicantDashboardComponent,

    SignupAsComponent,

    JsSideBarComponent,

    MainJobPageComponent,

    ProfileComponent,

    JsProfileSideBarComponent,

    WorkHistoryComponent,

    EducationHistoryComponent,

    CertificatesComponent,

    EmergencyInfoComponent,

    JsRightSidebarComponent,

    ProfileOverviewComponent,

    MessagesComponent,

    OngoingjobsComponent,

    DocumentsComponent,

    ChecklistComponent,

    CategoriesComponent,

    EmployerDashboardComponent,

    EmployerMainSidebarComponent,

    EmmployerChecklistComponent,

    SingleJobDetailsComponent,

    PostJobsComponent,

    EmployerChecklistComponent,

    EmployerProfileComponent,

    EmployerMessagesComponent,

    JobApplicationsComponent,

    ContractedjobsComponent,

    FindcandidatesComponent,

    PaymentsComponent,

    AdminDashboardComponent,

    AdminSideBarComponent,

    DialogOverviewExampleComponent,
    DialogOverviewExampleDialog,
    AdminProfileComponent,
    ApproveUsersComponent,
    AdminPaymentsComponent,
    AdminTablePaymentsComponent,
    AdminJobSeekersComponent,
    AdminEmployersComponent,
    AdminMessagesComponent,
   
  
    MessagesModalComponent,
  
    BanModalComponent,
    PasswordStrengthBar,
    ToastComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
    
    
    
  ],
  providers: [TestserviceService, SignupService, UserStateService, EmployeeProfileService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog,MessagesModalComponent,BanModalComponent]
})
export class AppModule { }
