import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

export const notificationTrigger = trigger('notificationState', [
  transition(':enter', [
    style({
      transform: 'translate3d(0, 0, 0)',
      backfaceVisibility: 'hidden',
      perspective: '1000px'
    }),
    animate('1s 1s cubic-bezier(.36,.07,.19,.97)', keyframes([
        style({
          transform: 'translate3d(-1px, 0, 0)',
          offset: 0.1
        }),
        style({
          transform: 'translate3d(1px, 0, 0)',
          offset: 0.2
        }),
        style({
          transform: 'translate3d(-2px, 0, 0)',
          offset: 0.3
        }),
        style({
          transform: 'translate3d(1px, 0, 0)',
          offset: 0.4
        }),
        style({
          transform: 'translate3d(-2px, 0, 0)',
          offset: 0.5
        }),
        style({
          transform: 'translate3d(1px, 0, 0)',
          offset: 0.6
        }),
        style({
          transform: 'translate3d(-2px, 0, 0)',
          offset: 0.7
        }),
        style({
          transform: 'translate3d(1px, 0, 0)',
          offset: 0.8
        }),
        style({
          transform: 'translate3d(-1px, 0, 0)',
          offset: 0.9
        })
      ])
    )
  ])
]);

