import {
    Component,
    ViewEncapsulation,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    Renderer2,
    Output,
    EventEmitter,
    TemplateRef
} from '@angular/core';
import { taskTypes } from '../mock-data';

@Component({
    selector: 'custom-select-group',
    templateUrl: './custom-select-group.component.html'
})
export class CustomSelectGroupComponent implements OnInit {
    optionData = taskTypes;

    selectedTaskType: string;

    ngOnInit() {
        this.selectedTaskType = this.optionData[0].name;
    }
}
