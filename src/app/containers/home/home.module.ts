import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TopbarModule } from 'src/app/components/topbar/topbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { CustomInputTextModule } from 'src/app/components/custom--text-input/custom-text-input.module';
import { CustomButtonModule } from 'src/app/components/custom-button/custom-button.module';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TopbarModule,
    FooterModule,
    CustomInputTextModule,
    CustomButtonModule
  ]
})
export class HomeModule { }
