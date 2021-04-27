'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API SERVER:', () => {

  /* ========== 404 bad route ========== */

  it('should respond with a 404 on not found', async () => {
    return await mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  /* ========== 404 bad method ========== */

  it('should respond with a 404 on not found', async () => {
    return await mockRequest.get('/').then(data => {
      expect(data.status).toBe(404);
    });
  });

  /* ========== create a new item ========== */

  it('should create a new item in the db', async () => {
    return await mockRequest.post('/food').send({ name: 'sushi', calories: 999, type: 'MEAT'}).then(response => {
      expect(response.status).toBe(201);
      expect(response.body.calories).toEqual(999);
    });
    console.log('trying to see if this works', response.body);
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/clothes').send({ name: 'shirt', quantity: 9, size: 'M'})
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('shirt');
  });

  /* ========== retrieve an item ========== */
  
  xit('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/food/6082076e8f67be8d4e49eff7');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  xit('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/clothes/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  /* ========== retrieve all items ========== */

  xit('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
  });

  xit('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
  });

  /* ========== update an item ========== */

  xit('should update an item in the db', async () => {
    const response = await mockRequest.put('/food/1').send({ name: 'sushi', calories: 999, type: 'MEAT'})
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('sushi');
  });

  xit('should update an item', async () => {
    const response = await mockRequest.put('/clothes/1').send({ name: 'shirt', quantity: 9, size: 'M'})
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('shirt');
  });

  /* ========== delete an item ========== */

  xit('should delete an item in the db', async () => {
    const response = await mockRequest.delete('/food/1')
    expect(response.status).toBe(200);
  });

  xit('should delete an item in the db', async () => {
    // const id = // needs to grab body._id
    const response = await mockRequest.delete('/clothes/1')
    expect(response.status).toBe(200);
  });

})