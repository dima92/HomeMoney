import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { NotFoundComponent } from "./components/not-found/NotFoundComponent.component";



const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: "registration", component: RegistrationComponent },
  { path: "**", component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
