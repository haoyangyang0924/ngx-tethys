import { Component, OnInit, HostBinding, Input, TemplateRef, ContentChild } from '@angular/core';

type ThyResultStatus = 'success' | 'warning' | 'error';

@Component({
    selector: 'thy-result',
    templateUrl: './result.component.html'
})
export class ThyResultComponent implements OnInit {
    @Input() thyStatus: ThyResultStatus;

    @Input() thyTitle: string;

    @Input() thySubtitle: string;

    @Input() thyIcon: string;

    @ContentChild('thyIcon', { static: false }) iconTemplateRef: TemplateRef<any>;

    @ContentChild('thyExtra', { static: false }) extraTemplateRef: TemplateRef<any>;

    @ContentChild('thyTitle', { static: false }) titleTemplateRef: TemplateRef<any>;

    @ContentChild('thySubtitle', { static: false }) subtitleTemplateRef: TemplateRef<any>;

    @HostBinding('class.thy-result') className = true;

    constructor() {}

    ngOnInit() {}
}
