import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vacanciesboardcomponent } from './vacanciesboardcomponent';

describe('Vacanciesboardcomponent', () => {
  let component: Vacanciesboardcomponent;
  let fixture: ComponentFixture<Vacanciesboardcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vacanciesboardcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vacanciesboardcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
