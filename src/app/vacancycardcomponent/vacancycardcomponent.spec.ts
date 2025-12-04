import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vacancycardcomponent } from './vacancycardcomponent';

describe('Vacancycardcomponent', () => {
  let component: Vacancycardcomponent;
  let fixture: ComponentFixture<Vacancycardcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vacancycardcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vacancycardcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
