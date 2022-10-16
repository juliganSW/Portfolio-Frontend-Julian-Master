import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonadminComponent } from './botonadmin.component';

describe('BotonadminComponent', () => {
  let component: BotonadminComponent;
  let fixture: ComponentFixture<BotonadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
