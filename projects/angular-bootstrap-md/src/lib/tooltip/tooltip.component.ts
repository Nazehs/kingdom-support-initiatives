import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ViewChild,
  ElementRef, Input,
} from '@angular/core';
import {TooltipConfig} from './tooltip.service';
import {isBs3} from '../utils/ng2-bootstrap-config';

@Component({
  selector: 'mdb-tooltip-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass'
  },
  template: `
    <div #tooltipArrow class="tooltip-arrow arrow"></div>
    <div #tooltipInner class="tooltip-inner">
      <ng-content></ng-content>
    </div>
  `
})
export class TooltipContainerComponent implements AfterViewInit {
  public classMap: any;
  public placement: string;
  public popupClass: string;
  public animation: boolean;
  public el: ElementRef;
  @Input() containerClass = '';
  @ViewChild('tooltipInner') tooltipInner: ElementRef;
  @ViewChild('tooltipArrow') tooltipArrow: ElementRef;
  @HostBinding('class.show') show = !this.isBs3;

  public get isBs3(): boolean {
    return isBs3();
  }

  public constructor(config: TooltipConfig, elem: ElementRef) {
    this.el = elem;
    Object.assign(this, config);
  }

  public ngAfterViewInit(): void {
    this.classMap = {in: false, fade: false};
    this.classMap[this.placement] = true;
    this.classMap['tooltip-' + this.placement] = true;

    this.classMap.in = true;
    if (this.animation) {
      this.classMap.fade = true;
    }

    if (this.popupClass) {
      this.classMap[this.popupClass] = true;
    }
  }

}
