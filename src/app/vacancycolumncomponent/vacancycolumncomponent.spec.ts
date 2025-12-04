import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vacancycolumncomponent } from './vacancycolumncomponent';

describe('Vacancycolumncomponent', () => {
  let component: Vacancycolumncomponent;
  let fixture: ComponentFixture<Vacancycolumncomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vacancycolumncomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vacancycolumncomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
