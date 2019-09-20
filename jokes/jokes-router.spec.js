const request = require('supertest');

const server = require('../api/server.js');

describe('jokes-router.js', () => {
    describe('GET /api/jokes', () => {
        it('should return 400 because middleware', () => {
            return request(server)
                .get('/api/jokes')
                .send({ username: 'jonny', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvbm55IiwiaWF0IjoxNTY5MDA3Mzk0LCJleHAiOjE1NjkwOTM3OTR9._nL4nKDshbSeBbrH75vE6qKxrpPbo4XfCGfTrZPK63I' })
                .then(res => {
                    expect(res.status).toBe(400)
                });
        })

        it('should return JSON', () => {
            return request(server)
                .get('/api/jokes')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
            
    })
        
});