import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const shrinkedMenuTrigger = trigger('shrinkedMenu', [
  state('notShrinked', style({
    minWidth: '260px'
  })),
  state('shrinked', style({
    minWidth: '56px'
  })),
  transition('notShrinked => shrinked', animate('400ms 0.2s')),
  transition('shrinked => notShrinked', animate(300))
]);

export const slideStateTrigger = trigger('slideState', [
  transition('void => *', [
    style({
      height: '0',
      opacity: 0,
    }),
    animate('300ms', keyframes([
         style({
           height: 0,
          opacity: 0,
           offset: 0
        }),
        style({
          height: '*/2',
          opacity: 0,
          offset: '0.5'
        }),
        style({
          height: '9*/10',
          opacity: 0,
          offset: '0.9'
        }),
        style({
          opacity: 1,
          height: '*',
          offset: 1
        })
      ]))
  ]),
  transition('* => void', [
    style({
      height: '*',
    }),
    animate('200ms', keyframes([
      style({
        height: '*/2',
        opacity: 0,
        offset: '0.5'
      }),
      style({
        height: '0',
        offset: '1'
      })
    ]))
  ]),
]);

export const textStateTrigger = trigger('textState', [

  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(15%)'
    }),
    animate('300ms', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ]),
  transition('* => void', [
    style({
      opacity: 1,
      transform: 'translateX(0)'
    }),
    animate('200ms', style({
      opacity: 0,
      transform: 'translateX(15%)'
    }))
  ])
]);


