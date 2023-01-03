import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRutasComponent } from './buscar-rutas.component';

describe('BuscarRutasComponent', () => {
  let component: BuscarRutasComponent;
  let fixture: ComponentFixture<BuscarRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
