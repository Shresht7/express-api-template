//  Library
import app from '../../src/app'
import { describe, test } from 'vitest'
import request from 'supertest'

describe('API', () => {

    test('GET /api/v1/echo/:id', async () => {
        await request(app)
            .get('/api/v1/echo/25')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                message: "25"
            })
    })

})
