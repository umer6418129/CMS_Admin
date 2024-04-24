import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainFacultiesComponent } from './maintain-faculties.component';

describe('MaintainFacultiesComponent', () => {
  let component: MaintainFacultiesComponent;
  let fixture: ComponentFixture<MaintainFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintainFacultiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintainFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
