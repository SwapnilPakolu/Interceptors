import { Directive, Input, OnInit, ElementRef, Renderer2, Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AjaxBusyNotifierService } from './ajax-busy-notifier.service';

@Directive({
  selector: '[ajax-busy-indicator]'
})
export class AjaxBusyIndicatorDirective implements OnInit {


  @Input() showDelay: number = 50;
  @Input() hideDelay: number = 1000;
  hideTimer: Subscription;
  showTimer: Subscription;

  constructor(private el: ElementRef, private renderer: Renderer2, private abns: AjaxBusyNotifierService) {
  }

  private timer
  private base: string;


  cancelPendingHide() {
    if (this.hideTimer) {
      this.hideTimer.unsubscribe();
      delete this.hideTimer;
    }
  }

  cancelPendingShow() {
    if (this.showTimer) {
      this.showTimer.unsubscribe();
      delete this.showTimer;
    }
  }
  ngOnInit() {
    this.abns.busy.subscribe(busy => {
      if (busy) {
        this.cancelPendingHide();

        // If a show is already pending, don't start a new one.
        if (!this.showTimer) {
          this.showTimer =
            interval(this.showDelay).subscribe(() => {
              this.renderer.removeClass(this.el.nativeElement, 'inactive');
              this.showTimer.unsubscribe();
              this.showTimer = null;
            });
        }
      }
    });


    this.abns.busy.subscribe(busy => {
      if (!busy) {
        this.cancelPendingHide();

        // If a show is already pending, don't start a new one.
        if (!this.hideTimer) {
          this.hideTimer =
            interval(this.showDelay).subscribe(() => {
              this.renderer.addClass(this.el.nativeElement, 'inactive');
              this.hideTimer.unsubscribe(); this.hideTimer = null;
            });
        }
      }
    }
    );
  }

}