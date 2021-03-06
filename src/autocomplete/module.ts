import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThyAutocompleteTriggerDirective } from './autocomplete.trigger.directive';
import { ThyInputModule } from '../input/module';
import { ThyAutocompleteComponent } from './autocomplete.component';
import { ThyLabelModule } from '../label/label.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { ThyLoadingModule } from '../loading';
import { ThyDirectiveModule } from '../directive';
import { ThyIconModule } from '../icon';
import { ThyEmptyModule } from '../empty/empty.module';
import { ThyAutocompleteContainerComponent } from './overlay/autocomplete-container.component';
import { THY_AUTOCOMPLETE_DEFAULT_CONFIG_PROVIDER } from './overlay/autocomplete.config';
import { ThyOptionModule } from '../core/option/module';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThyInputModule,
        ThyLabelModule,
        OverlayModule,
        PortalModule,
        ThyLoadingModule,
        ThyDirectiveModule,
        ThyIconModule,
        ThyEmptyModule,
        ThyOptionModule
    ],
    declarations: [ThyAutocompleteTriggerDirective, ThyAutocompleteComponent, ThyAutocompleteContainerComponent],
    entryComponents: [ThyAutocompleteContainerComponent],
    exports: [ThyAutocompleteTriggerDirective, ThyAutocompleteComponent, ThyAutocompleteContainerComponent],
    providers: [THY_AUTOCOMPLETE_DEFAULT_CONFIG_PROVIDER]
})
export class ThyAutocompleteModule {}
