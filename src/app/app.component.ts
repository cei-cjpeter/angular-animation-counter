import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, VERSION } from '@angular/core';
export const DEFAULT_ANIMATION_PERIOD = '1.5s ease-out';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('counterAnimation', [
      transition(':increment', [
        group([
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(100%) scale(1)' }),
              animate(
                '200ms ease-out',
                keyframes([
                  style({
                    opacity: 1,
                    transform: 'translateY(100%)',
                    offset: 0.1,
                  }),
                  style({
                    opacity: 1,
                    transform: 'translateY(0%) scale(2)',
                    offset: 0.9,
                  }),
                  style({ transform: 'scale(1)', offset: 1 }),
                ])
              ),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              style({
                opacity: 1,
                transform: 'translateY(0%) scale(1)',
                position: 'absolute',
              }),
              animate(
                '200ms ease-out',
                keyframes([
                  style({ transform: 'scale(2)', offset: .2 }),
                  style({
                    opacity: 0,
                    transform: 'translateY(-100%) scale(1)',
                    offset: 1
                  }),
                ])
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
      transition(':decrement', [
        group([
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(-100%)' }),
              // stagger(50, [
              animate(
                '200ms ease-out',
                style({ opacity: 1, transform: 'translateY(0%)' })
              ),
              // ]),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              // stagger(50, [
              style({
                opacity: 1,
                transform: 'translateY(0%)',
                position: 'absolute',
              }),
              animate(
                '200ms ease-out',
                style({ opacity: 0, transform: 'translateY(100%)' })
              ),
              // ]),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
    trigger('valueUpdated', [
      transition(
        ':increment, :decrement, * => *',
        group([
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(40%)' }),
              animate(
                DEFAULT_ANIMATION_PERIOD,
                style({ opacity: 1, transform: 'translateY(0%)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              style({ opacity: 1, transform: 'translateY(0%)' }),
              animate(
                DEFAULT_ANIMATION_PERIOD,
                style({ opacity: 0, transform: 'translateY(-40%)' })
              ),
            ],
            { optional: true }
          ),
        ])
      ),
    ]),
    trigger('filterAnimation2', [
      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0, width: '0px' }),
            stagger(50, [
              animate('300ms ease-out', style({ opacity: 1, width: '*' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  value = 0;
  name = 'Angular ' + VERSION.major;

  prop = 10;
}
