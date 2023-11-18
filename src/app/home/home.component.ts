import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods: Foods[]=[];


constructor(private fs: FoodService, private routerActivated: ActivatedRoute){
 
}

ngOnInit(): void {
  this.foods=this.fs.getAll();
  this.routerActivated.params.subscribe(param=>{
    if(param['searchItem']){
      this.foods= this.fs.getAllFoodsBySearchItem(param['searchItem'])
    }
    else if(param['tag']){
      this.foods=this.fs.getAllFoodsByTag(param['tag'])
    }
    else{
      this.foods=this.fs.getAll()
    }
  })

}

}
