import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./paginas/contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'edita-contatos',
    loadChildren: () => import('./paginas/edita-contatos/edita-contatos.module').then( m => m.EditaContatosPageModule)
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./paginas/tarefas/tarefas.module').then( m => m.TarefasPageModule)
  },
  {
    path: 'edita-tarefas',
    loadChildren: () => import('./paginas/edita-tarefas/edita-tarefas.module').then( m => m.EditaTarefasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'excluir',
    loadChildren: () => import('./paginas/excluir/excluir.module').then( m => m.ExcluirPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
