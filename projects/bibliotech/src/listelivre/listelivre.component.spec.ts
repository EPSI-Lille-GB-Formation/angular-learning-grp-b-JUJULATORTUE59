import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelivreComponent } from './listelivre.component';

describe('ListelivreComponent', () => {
  let component: ListelivreComponent;
  let fixture: ComponentFixture<ListelivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListelivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListelivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
