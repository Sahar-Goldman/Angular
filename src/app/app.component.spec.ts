import { TestBed } from '@angular/core/testing';
import { AppCalculator } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppCalculator
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppCalculator);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hello-angular'`, () => {
    const fixture = TestBed.createComponent(AppCalculator);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hello-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppCalculator);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('hello-angular app is running!');
  });
});
