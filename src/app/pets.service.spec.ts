import { TestBed,getTestBed } from '@angular/core/testing';
import { of } from 'rxjs'
import { PetsService } from './pets.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PetsService', () => {
  
  let petService: PetsService;
  let httpMock: HttpTestingController;
  
  let response = [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null},{"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}]
  //spyOn(petService,'getPets').and.returnValue(of(response));
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientTestingModule
    ],
    declarations: [
      
    ],
    providers: [
      PetsService
    ]
  })
  petService = getTestBed().get(PetsService);
  httpMock = getTestBed().get(HttpTestingController);
  });

  
  it('should be get response', () => {
    petService.getPets().subscribe(res => {
      expect(res).not.toBeNull();
    })
    const req = httpMock.expectOne('http://5c92dbfae7b1a00014078e61.mockapi.io/owners');
    expect(req.request.method).toBe('GET');
    req.flush(response);
    httpMock.verify();
  });
  it('should be get expected response', () => {
    petService.getPets().subscribe(res => {
      expect(res).toEqual(response);
    })
  });
});
