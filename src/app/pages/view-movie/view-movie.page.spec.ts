import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ViewMoviePage } from './view-movie.page';

describe('ViewMessagePage', () => {
  let component: ViewMoviePage;
  let fixture: ComponentFixture<ViewMoviePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ViewMoviePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
