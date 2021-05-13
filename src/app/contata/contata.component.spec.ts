import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContataComponent } from './contata.component';

describe('ContataComponent', () => {
  let component: ContataComponent;
  let fixture: ComponentFixture<ContataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
