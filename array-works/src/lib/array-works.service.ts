import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayWorksService {
  private array1_matched_property_indices: number[] = [];
  private array2_matched_property_indices: number[] = [];

  constructor() {}

  async match_two_array_with_single_property_and_get_matched_indices(array1: any[], array2: any[], property_to_match: string){
    this.array1_matched_property_indices = [];
    this.array2_matched_property_indices = [];

    for(const [outerIndex, outerEl] of array1.entries()){
      await this.perform_check(outerEl, outerIndex, array2, property_to_match);
    }
    return {
      array1_matched_property_indices: this.array1_matched_property_indices, 
      array2_matched_property_indices: this.array2_matched_property_indices
    };
  }

  async perform_check(outerEl:any, outerIndex:number, array2: any[], property_to_match: string){
    for(const [innerIndex, innerEl] of array2.entries()){
      if(outerEl[property_to_match] === innerEl[property_to_match]){ 
        this.array1_matched_property_indices.push(outerIndex);
        this.array2_matched_property_indices.push(innerIndex);
      };
    }
  }
}
