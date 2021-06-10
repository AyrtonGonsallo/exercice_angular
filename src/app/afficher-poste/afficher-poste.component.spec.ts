import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPosteComponent } from './afficher-poste.component';

describe('PosteComponent', () => {
  let component: AfficherPosteComponent;
  let fixture: ComponentFixture<AfficherPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
