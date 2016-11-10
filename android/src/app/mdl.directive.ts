import { Directive, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[android-mdl]'
})
export class AndroidMdlDirective implements AfterViewChecked {

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

}
