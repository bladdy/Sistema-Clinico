import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { materialModule } from './material.module';
import { NgxEditorModule } from 'ngx-editor';
import { FullCalendarModule } from '@fullcalendar/angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DataService } from './data/data.service';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightgalleryModule } from 'lightgallery/angular'; 
import { DateRangePickerModule } from '../common-component/date-range-picker/date-range-picker.module';
import { CustomPaginationModule } from './custom-pagination/custom-pagination.module';
import { NgxMaskModule} from 'ngx-mask';
import { NgChartsModule } from 'ng2-charts';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CalendarModule } from 'primeng/calendar';
import { FilterModule } from '../common-component/filter/filter.module';
@NgModule({ declarations: [],
    exports: [
        CommonModule,
        NgxBootstrapModule,
        CountUpModule,
        NgApexchartsModule,
        NgCircleProgressModule,
        materialModule,
        NgxEditorModule,
        FullCalendarModule,
        
        MatSortModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        LightgalleryModule,
        DateRangePickerModule,
        CustomPaginationModule,
              NgxMaskModule,
              NgChartsModule,
              RatingModule,
              CalendarModule,
              FilterModule
    ], imports: [CommonModule,
        NgxBootstrapModule,
        CountUpModule,
        NgApexchartsModule,
        NgCircleProgressModule.forRoot({
            "radius": 40,
            "space": -10,
            "outerStrokeWidth": 10,
            "innerStrokeWidth": 10,
            "animationDuration": 1000,
            "clockwise": false,
            "startFromZero": false,
            "lazy": false,
            "outerStrokeLinecap": "square",
            "showSubtitle": false,
            "showTitle": false,
            "showUnits": false,
            "showBackground": false
        }),
        materialModule,
        NgxEditorModule,
        FullCalendarModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule], providers: [
        DataService,
        CarouselModule,
        provideHttpClient(withInterceptorsFromDi()),
        LightgalleryModule,
        DateRangePickerModule,
        CustomPaginationModule,
     NgxMaskModule,
     NgChartsModule,
     RatingModule,
     CalendarModule,
              FilterModule

    ] })
export class SharedModule { }
