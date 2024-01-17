import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    SearchCustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
