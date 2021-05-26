# ArrayWorks

Asynchronously compare two array and check if elements has equal value for specified property and get matched indices.

## Installation & Usage

1. Run 'npm i array-works'

2. Add module import in app.module.ts in imports array
import { ArrayWorksModule } from 'array-works';

3. Inject service in component's constructor
constructor(public arrayOps: ArrayWorksService){}

4. Pass two array to compare asynchronously along with object property to match
    async callFn(){
        let data = await this.arrayOps.match_two_array_with_single_property_and_get_matched_indices(this.array1, this.array2, 'city');
        console.log('RETURNED DATA', data);
    }

5. Note: Make sure to include async & await.


## Further help

To get more help write email @ akashjadhav1221@gmail.com
Improve this library by adding more functionality: https://github.com/akashjadhav1221/array-works 

