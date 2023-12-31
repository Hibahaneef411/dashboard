import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { AreachartComponent } from './areachart/areachart.component';
import { TableComponent } from './table/table.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { EmployeeComponent } from './employee/employee.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadsComponent } from './leads/leads.component';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashBoardComponent,
    SideBarComponent,
    CardComponent,
    AreachartComponent,
    TableComponent,
    PieChartComponent,
    EmployeeComponent,
    GalleryComponent,
    LeadsComponent,
    ContactComponent,
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    HighchartsChartModule,
    MatPaginatorModule,
    MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
