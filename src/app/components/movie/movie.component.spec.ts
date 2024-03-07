import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ViewMoviePage } from '../../pages/view-movie/view-movie.page';

import { MovieComponent } from './movie.component';

describe('MessageComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieComponent, ViewMoviePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
