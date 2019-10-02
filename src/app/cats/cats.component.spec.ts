import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsService } from '../pets.service'
import { HttpClient,HttpClientModule, HttpInterceptor, HttpHeaders } from '@angular/common/http';

import { CatsComponent } from './cats.component';

describe('CatsComponent', () => {
  let component: CatsComponent;
  let petsService: PetsService;
  let fixture: ComponentFixture<CatsComponent>;
  let opts = {  "node":"pets",
      "type":"type",
      "value":"name",
      "check":"Cat"
    };
  let response = [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null},{"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}];
  let transformed = { Male: [ 'Garfield', 'Jim', 'Max', 'Tom' ], Female: [ 'Garfield', 'Simba', 'Tabby' ] };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsComponent ],
      providers: [
        PetsService
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    petsService = TestBed.get(PetsService);
    spyOn(petsService,'getPets').and.callThrough();
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    component.petData = transformed;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should hasError', () => {
    expect(component.hasError).toBeFalsy();
    component.hasError = true;
    expect(component.hasError).toBeTruthy();
  });
  it('should transform', () => {
    let res = component.transform(response,opts,function(item){
      return [item.gender];
    });
    expect(res).toEqual(transformed);
  });
  it('should petData', () => {
    expect(component.petData).toEqual(transformed);
  });
});
