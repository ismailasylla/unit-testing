import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeComponent, compute ,greet  } from './compute.component';


describe('ComputeComponent', () => {
  let component: ComputeComponent;
  let fixture: ComponentFixture<ComputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('compute', () =>{
  it('should return 0 if input is negative', () =>{
    const result = compute(-1)
    expect(result).toBe(0)
  })
})


describe('greet', () =>{
  it('should include include the name', ()=>{
    const result = greet('ismail')
    expect(result).toContain('ismail')
  })
})