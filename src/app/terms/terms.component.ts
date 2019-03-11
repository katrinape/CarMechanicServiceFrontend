import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '1', cols: 1, rows: 1 },
          { title: '2', cols: 1, rows: 1 },
          { title: '3', cols: 1, rows: 1 },
          { title: '4', cols: 1, rows: 1 },
          { title: '5', cols: 1, rows: 1 },
          { title: '6', cols: 1, rows: 1 },
          { title: '7', cols: 1, rows: 1 },
          { title: '8', cols: 1, rows: 1 },
          { title: '9', cols: 1, rows: 1 },
          { title: '10', cols: 1, rows: 1 },
          { title: '11', cols: 1, rows: 1 },
          { title: '12', cols: 1, rows: 1 },
          { title: '13', cols: 1, rows: 1 },
          { title: '14', cols: 1, rows: 1 },
          { title: '15', cols: 1, rows: 1 },
          { title: '16', cols: 1, rows: 1 },
          { title: '17', cols: 1, rows: 1 },
          { title: '18', cols: 1, rows: 1 },
          { title: '19', cols: 1, rows: 1 },
          { title: '20', cols: 1, rows: 1 },
          { title: '21', cols: 1, rows: 1 },
          { title: '22', cols: 1, rows: 1 },
          { title: '23', cols: 1, rows: 1 },
          { title: '24', cols: 1, rows: 1 },
          { title: '25', cols: 1, rows: 1 },
          { title: '26', cols: 1, rows: 1 },
          { title: '27', cols: 1, rows: 1 },
          { title: '28', cols: 1, rows: 1 },
          { title: '29', cols: 1, rows: 1 },
          { title: '30', cols: 1, rows: 1 },
          { title: '31', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: '1', cols: 1, rows: 1 },
        { title: '2', cols: 1, rows: 1 },
        { title: '3', cols: 1, rows: 1 },
        { title: '4', cols: 1, rows: 1 },
        { title: '5', cols: 1, rows: 1 },
        { title: '6', cols: 1, rows: 1 },
        { title: '7', cols: 1, rows: 1 },
        { title: '8', cols: 1, rows: 1 },
        { title: '9', cols: 1, rows: 1 },
        { title: '10', cols: 1, rows: 1 },
        { title: '11', cols: 1, rows: 1 },
        { title: '12', cols: 1, rows: 1 },
        { title: '13', cols: 1, rows: 1 },
        { title: '14', cols: 1, rows: 1 },
        { title: '15', cols: 1, rows: 1 },
        { title: '16', cols: 1, rows: 1 },
        { title: '17', cols: 1, rows: 1 },
        { title: '18', cols: 1, rows: 1 },
        { title: '19', cols: 1, rows: 1 },
        { title: '20', cols: 1, rows: 1 },
        { title: '21', cols: 1, rows: 1 },
        { title: '22', cols: 1, rows: 1 },
        { title: '23', cols: 1, rows: 1 },
        { title: '24', cols: 1, rows: 1 },
        { title: '25', cols: 1, rows: 1 },
        { title: '26', cols: 1, rows: 1 },
        { title: '27', cols: 1, rows: 1 },
        { title: '28', cols: 1, rows: 1 },
        { title: '29', cols: 1, rows: 1 },
        { title: '30', cols: 1, rows: 1 },
        { title: '31', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
