import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getFoodById(id: number): Foods{
return this.getAll().find(food => food.id==id)!;
}

  getAllFoodsBySearchItem(searchItem: string) : Foods[]{
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchItem.toLowerCase()))
  }
  getAllTags():Tag[]{
    return [
      {name: 'All', count:14},
      {name: 'FastFood', count: 4},
      {name: 'Pizza', count: 2},
      {name: 'Lunch', count: 3},
      {name: 'SlowFood', count: 2},
      {name: 'Hamburger', count: 1},
      {name: 'Fry', count: 1},
      {name: 'Soup', count: 1}
    ]
  }
  
  getAllFoodsByTag(tag: string):Foods[]{
    if(tag=="All"){
      return this.getAll()
    }
    else{
      return this.getAll().filter(food=>food.tags?.includes(tag));
    }
    // return tag == "All"?
    // this.getAll():
    // this.getAll().filter(food=> food.tags?.includes(tag));
  }
  getAll(): Foods[] {
    return [
     {
      id: 1,
      name: 'Salad',
      price: 2,
      cooktime: '15-20',
      favourite: true,
      origins: ['India', 'France'],
      star: 3.3,
      imageUrl: '/assets/food1.jpg',
      tags: ['Lunch','Fry', 'Dinner'],
     },
     {
      id: 2,
      name: 'Burger',
      price: 2,
      cooktime: '15-20',
      favourite: true,
      origins: ['India', 'France'],
      star: 3.3,
      imageUrl: '/assets/food2.jpg',
      tags: ['FastFood','Fry'],
     },
     {
      id: 3,
      name: 'Noodles',
      price: 2,
      cooktime: '15-20',
      favourite: false,
      origins: ['India', 'France'],
      star: 3.3,
      imageUrl: '/assets/food3.jpg',
      tags: ['FastFood','Noodles'],
     },
     {
      id: 4,
      name: 'Sandwitch',
      price: 2,
      cooktime: '15-20',
      favourite: true,
      origins: ['India', 'France'],
      star: 3.3,
      imageUrl: '/assets/food4.jpg',
      tags: ['FastFood','Fry'],
     },
     {
      id: 5,
      name: 'Tomat Salad',
      price: 2,
      cooktime: '15-20',
      favourite: false,
      origins: ['India', 'France'],
      star: 3.3,
      imageUrl: '/assets/food5.jpg',
      tags: ['FastFood','Fry'],
     },
     {
      id: 6,
      name: 'Sandwitch',
      price: 2,
      cooktime: '15-20',
      favourite: true,
      origins: ['India', 'France'],
      star: 3.3,
      imageUrl: '/assets/food6.jpg',
      tags: ['FastFood','Fry'],
     },
     {
      id: 7,
      name: 'Vegetable Burger',
      price: 2,
      cooktime: '15-20',
      favourite: true,
      origins: ['India', 'France'],
      star: 3.3,
      imageUrl: '/assets/food7.jpg',
      tags: ['FastFood','Fry'],
     },
     {
      id: 8,
      name: 'Pasta',
      price: 2,
      cooktime: '15-20',
      favourite: false,
      origins: ['India', 'France'],
      star: 3.3,
      imageUrl: '/assets/food11.jpg',
      tags: ['FastFood','Fry'],
     }
    ];
  }
}
