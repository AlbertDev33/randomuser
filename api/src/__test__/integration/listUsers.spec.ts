import request from 'supertest';

import { app } from '@shared/expressApp/app';

describe('Integration Test: List Users', () => {
  it('should list users', async () => {
    const response = await request(app).get('/list');
    const userList = response.body.users.results;
    const length = userList.length > 0;
    expect(length).toBe(true);
  });
});
