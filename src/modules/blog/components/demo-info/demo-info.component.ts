import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-demo-info',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './demo-info.component.html',
    styleUrls: ['demo-info.component.scss'],
})
export class DemoInfoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    redirectRetailer() {
        window.location.href = 'https://amazon.com';
    }

    redirectCustomer() {
        window.location.href = 'https://amazon.com';
    }
}
