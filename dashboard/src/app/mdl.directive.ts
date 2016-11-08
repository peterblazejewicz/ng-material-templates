
import { Directive, AfterViewChecked } from '@angular/core';

@Directive({
    selector: '[dashboard-mdl]'
})
export class MdlDirective implements AfterViewChecked {

    ngAfterViewChecked() {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    }

}
