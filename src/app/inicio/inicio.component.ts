import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';

import * as Chartist from 'chartist';

declare const $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit, AfterViewInit {

  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {


   }
   ngAfterViewInit() {

   }
}
