import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
/* import { AuthGuard } from './guards/auth.guard'; */


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
 
  { path: 'contacts', 
  children:[
    {
  path:'',
  loadChildren: './pages/contacts/list/list.module#ListPageModule' ,
/*   canActivate:[AuthGuard],
  canDeactivate:[AuthGuard] */
}
   ,

  { path: 'new',
   loadChildren: './pages/contacts/add-contact/add-contact.module#AddContactPageModule' },

  { path: ':id', 
  loadChildren: './pages/contacts/contact-details/contact-details.module#ContactDetailsPageModule' }
]
  },
  { path: 'edit-modal', loadChildren: './pages/contacts/contact-details/edit-modal/edit-modal.module#EditModalPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
