import { Component } from '@angular/core';
import { DataCards } from '../../components/data-cards/data-cards';
import { DataTable } from '../../components/data-table/data-table';

@Component({
  selector: 'app-admin',
  imports: [DataCards, DataTable],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

}
