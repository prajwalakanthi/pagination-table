import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithoutPaginationComponent } from './table-without-pagination.component';

describe('TableWithoutPaginationComponent', () => {
  let component: TableWithoutPaginationComponent;
  let fixture: ComponentFixture<TableWithoutPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithoutPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithoutPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
