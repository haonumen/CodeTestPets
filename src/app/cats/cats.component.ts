import { Component, OnInit, Inject} from '@angular/core';
import { PetsService } from '../pets.service';
import { Owner } from '../models/owner';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  petData = {};
  hasError: boolean = false;
  opts = {  "node":"pets",
            "type":"type",
            "value":"name",
            "check":"Cat"
          };
  constructor(
    @Inject(PetsService) private petService: PetsService
  ) { }

  ngOnInit() {
    this.petService.getPets().subscribe(res =>{
      this.petData = this.transform(res, this.opts, function(item){
        return [item.gender];
    }); 
   
    this.hasError = (Object.entries(this.petData).length == 0);
    })
  }
  
  //group by key you given and return the sorted the value you want to check
  //works when array has same structure like model Owner
  transform( array , opts,f) {
    let groups = {};
    let petType = opts.type
    let petName = opts.value
    if(Array.isArray(array)){
      array.forEach( function( o ) {        
        let group = f(o);
        let pet = []
        groups[group] = groups[group] || [];
        let pets = o[opts.node]
        if(pets!=null && Array.isArray(pets)) {
          pets.forEach( function (p) {
            if(p[petType]==opts.check) {
              pet.push(p[petName])
            }
          })
          groups[group].push(pet);
          groups[group] = groups[group].flat()
        }     
      }); 
    }
    for (var g in groups) {
      if (groups.hasOwnProperty(g)) {
        groups[g] = groups[g].sort();
        
      }
    }
     return groups
  }


}
