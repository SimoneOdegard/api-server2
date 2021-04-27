// 'use strict';

// require('@code-fellows/supergoose');

// const DataCollection = require('../src/models/data-collection-class.js');
// const ClothesSchema = require('../src/models/clothes.js');
// const clothes = new DataCollection(ClothesSchema);

// describe('Clothes Actions', () => {

//   it('can create() a new clothes item', () => {
//     let obj = { name: 'shirt', quantity: 1, size: 'S' };
//     let expected = { name: 'shirt', quantity: 1, size: 'S' };

//     return clothes.create(obj)
//       .then(record => {
//         Object.keys(obj).forEach(item => {
//           expect(record[item]).toEqual(expected[item])
//         })
//       });

//   });

//   it('can read() a single clothes item', () => {
//     let obj = { name: 'test clothes 2', quantity: 9999, size: 'M' };
//     let expected = { name: 'test clothes 2', quantity: 9999, size: 'M' };
    
//     return clothes.create(obj)
//       .then(record => {
//         return clothes.read(record._id)
//           .then(item => {
//             console.log('this should be test clothes 2', item);
//           })
//       })
//   });

// });