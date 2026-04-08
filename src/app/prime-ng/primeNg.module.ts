import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
@NgModule({
  exports: [TableModule, ButtonModule, InputTextModule],
})
export class PrimeNgModule {}
