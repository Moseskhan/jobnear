import { AdminMessagesComponent } from './../pages/admin/admin-messages/admin-messages.component';
import { AdminEmployersComponent } from './../pages/admin/admin-employers/admin-employers.component';
import { AdminTablePaymentsComponent } from './../pages/admin/admin-table-payments/admin-table-payments.component';
import { AdminProfileComponent } from "./../pages/admin/admin-profile/admin-profile.component";
import { AdminDashboardComponent } from "./../pages/admin/admin-dashboard/admin-dashboard.component";
import { DialogOverviewExampleComponent } from "./../dialog-overview-example/dialog-overview-example.component";
import { FindcandidatesComponent } from "./../pages/employers/findcandidates/findcandidates.component";
import { JobApplicationsComponent } from "./../pages/employers/job-applications/job-applications.component";
import { EmployerProfileComponent } from "./../pages/employers/employer-profile/employer-profile.component";
import { EmployerDashboardComponent } from "./../pages/employers/employer-dashboard/employer-dashboard.component";
import { CategoriesComponent } from "./../pages/categories/categories.component";
import { WorkHistoryComponent } from "./../pages/jobseekers/work-history/work-history.component";
import { ProfileComponent } from "./../pages/jobseekers/profile/profile.component";
import { MainJobPageComponent } from "./../pages/jobseekers/main-job-page/main-job-page.component";
import { SignupAsComponent } from "./../pages/signup-as/signup-as.component";
import { EmployerSignupComponent } from "./../pages/employer-signup/employer-signup.component";
import { ApplicationFormComponent } from "./../pages/application-form/application-form.component";
import { EmployeeSignUpComponent } from "./../pages/employee-sign-up/employee-sign-up.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { EmployeeLoginComponent } from "../pages/employee-login/employee-login.component";
import { ApplicantDashboardComponent } from "../pages/applicant-dashboard/applicant-dashboard.component";
import { EducationHistoryComponent } from "../pages/jobseekers/education-history/education-history.component";
import { CertificatesComponent } from "../pages/jobseekers/certificates/certificates.component";
import { EmergencyInfoComponent } from "../pages/jobseekers/emergency-info/emergency-info.component";
import { ProfileOverviewComponent } from "../pages/jobseekers/profile-overview/profile-overview.component";
import { MessagesComponent } from "../pages/jobseekers/messages/messages.component";
import { OngoingjobsComponent } from "../pages/jobseekers/ongoingjobs/ongoingjobs.component";
import { DocumentsComponent } from "../pages/jobseekers/documents/documents.component";
import { ChecklistComponent } from "../pages/jobseekers/checklist/checklist.component";
import { SingleJobDetailsComponent } from "../pages/employers/single-job-details/single-job-details.component";
import { PostJobsComponent } from "../pages/employers/post-jobs/post-jobs.component";
import { EmployerChecklistComponent } from "../pages/employers/employer-checklist/employer-checklist.component";
import { EmployerMessagesComponent } from "../pages/employers/employer-messages/employer-messages.component";
import { ContractedjobsComponent } from "../pages/employers/contractedjobs/contractedjobs.component";
import { PaymentsComponent } from "../pages/employers/payments/payments.component";
import { ApproveUsersComponent } from "../pages/admin/approve-users/approve-users.component";
import { AdminPaymentsComponent } from "../pages/admin/admin-payments/admin-payments.component";
import { AdminJobSeekersComponent } from '../pages/admin/admin-job-seekers/admin-job-seekers.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "accounts/employee/signup",
    component: EmployeeSignUpComponent
  },
  {
    path: "newapplication/jobseeker",
    component: ApplicationFormComponent
  },
  {
    path: "accounts/login",
    component: EmployeeLoginComponent
  },
  {
    path: "accounts/employer/signup",
    component: EmployerSignupComponent
  },
  {
    path: "jobseeker/dashboard",
    component: ApplicantDashboardComponent
  },
  {
    path: "jobseeker/findjobs",
    component: MainJobPageComponent
  },
  {
    path: "accounts/options",
    component: SignupAsComponent
  },
  {
    path: "jobseeker/profile",
    component: ProfileComponent
  },
  {
    path: "jobseeker/profile/workhistory",
    component: WorkHistoryComponent
  },
  {
    path: "jobseeker/profile/educationhistory",
    component: EducationHistoryComponent
  },
  {
    path: "jobseeker/profile/certifications",
    component: CertificatesComponent
  },
  {
    path: "jobseeker/profile/emergencyinfo",
    component: EmergencyInfoComponent
  },
  {
    path: "jobseeker/profile/overview",
    component: ProfileOverviewComponent
  },
  {
    path: "jobseeker/profile/notifications",
    component: MessagesComponent
  },
  {
    path: "jobseeker/ongoingjobs",
    component: OngoingjobsComponent
  },
  {
    path: "jobseeker/profile/documents",
    component: DocumentsComponent
  },
  {
    path: "jobseeker/checklist",
    component: ChecklistComponent
  },
  {
    path: "jobseeker/categories",
    component: CategoriesComponent
  },
  {
    path: "employer/dashboard",
    component: EmployerDashboardComponent
  },
  {
    path: "employer/job",
    component: SingleJobDetailsComponent
  },
  {
    path: "employer/postjobs",
    component: PostJobsComponent
  },
  {
    path: "employer/profile",
    component: EmployerProfileComponent
  },
  {
    path: "employer/checklist",
    component: EmployerChecklistComponent
  },
  {
    path: "employer/messages",
    component: EmployerMessagesComponent
  },
  {
    path: "employer/jobapplications",
    component: JobApplicationsComponent
  },
  {
    path: "employer/contracts",
    component: ContractedjobsComponent
  },
  {
    path: "employer/findcandidates",
    component: FindcandidatesComponent
  },
  {
    path: "employer/payments",
    component: PaymentsComponent
  },
  {
    path: "dialog",
    component: DialogOverviewExampleComponent
  },
  {
    path: "admin/dashboard",
    component: AdminDashboardComponent
  },
  {
    path: "admin/profile",
    component: AdminProfileComponent
  },
  {
    path: "admin/jobseekers/approve",
    component: ApproveUsersComponent
  },
  {
    path: "admin/employers/approve",
    component: ApproveUsersComponent
  },
  {
    path: "admin/payments",
    component: AdminPaymentsComponent
  }
  ,
  {
    path: "admin/payments/view",
    component: AdminTablePaymentsComponent
  }
  ,
  {
    path: "admin/jobseekers",
    component: AdminJobSeekersComponent
  }
  ,
  {
    path: "admin/employers",
    component: AdminEmployersComponent
  }
  ,
  {
    path: "admin/messages",
    component: AdminMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
