import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './login/components/formulario/formulario.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { MoviesComponent } from './peliculas/components/movies/movies.component';

const routes: Routes = [
  
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: FormularioComponent },
    { path: 'peliculas', component: MoviesComponent },
    { path: '**', redirectTo: '/home' }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
