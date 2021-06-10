import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPosteComponent } from './ajouter-poste.component';

describe('AjouterPosteComponent', () => {
  let component: AjouterPosteComponent;
  let fixture: ComponentFixture<AjouterPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
