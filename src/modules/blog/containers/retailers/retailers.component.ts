import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-about',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './retailers.component.html',
    styleUrls: ['retailers.component.scss'],
})
export class RetailersComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
