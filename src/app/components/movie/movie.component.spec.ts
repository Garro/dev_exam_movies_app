import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ViewMessagePage } from '../../pages/view-message/view-message.page';

import { MovieComponent } from './movie.component';

describe('MessageComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieComponent, ViewMessagePage],
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
