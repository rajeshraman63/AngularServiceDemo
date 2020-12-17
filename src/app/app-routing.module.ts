import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
      path:'',
      component: HomeComponent
    },
    {
      path:'books',
      component:BookComponent
    },
    {
      path: '*',
      component: HomeComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
