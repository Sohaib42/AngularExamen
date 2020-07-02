import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrdinateurComponent } from './delete-ordinateur.component';

describe('DeleteOrdinateurComponent', () => {
  let component: DeleteOrdinateurComponent;
  let fixture: ComponentFixture<DeleteOrdinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOrdinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
