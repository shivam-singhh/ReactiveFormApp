import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestRoutingModule } from './interest-routing.module';
import { InterestComponent } from './interest.component';
import { InterestContainerComponent } from './interest-container/interest-container.component';
import { InterestFormPresentationComponent } from './interest-container/interest-form-presentation/interest-form-presentation.component';
import { InterestListPresentationComponent } from './interest-container/interest-list-presentation/interest-list-presentation.component';
import { InterestService } from './interest.service';
import { HttpClientModule } from '@angular/common/http';

import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    InterestComponent,
    InterestContainerComponent,
    InterestFormPresentationComponent,
    InterestListPresentationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InterestRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
    NgSelectModule,
  ],
  providers: [
    InterestService
  ]
})
export class InterestModule { }
