import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vacancydetaildialogcomponent } from './vacancydetaildialogcomponent';

describe('Vacancydetaildialogcomponent', () => {
  let component: Vacancydetaildialogcomponent;
  let fixture: ComponentFixture<Vacancydetaildialogcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vacancydetaildialogcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vacancydetaildialogcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
