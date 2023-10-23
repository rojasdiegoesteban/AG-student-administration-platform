import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { FormErrorsPipe } from './pipes/form-errors.pipe';




@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    FullnamePipe,
    FormErrorsPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ToolbarComponent,
    SidebarComponent,
    FullnamePipe,
    FormErrorsPipe   
  ]
})
export class SharedModule { }
