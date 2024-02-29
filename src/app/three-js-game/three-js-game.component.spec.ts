import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeJsGameComponent } from './three-js-game.component';

describe('ThreeJsGameComponent', () => {
  let component: ThreeJsGameComponent;
  let fixture: ComponentFixture<ThreeJsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeJsGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeJsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
