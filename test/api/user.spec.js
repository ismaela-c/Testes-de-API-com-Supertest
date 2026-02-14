// Bibliotecas
const supertest = require('supertest')
const userId = 33390799

//funções
describe('PetStore Swagger - Entidade User', () => {
const request = supertest('https://petstore.swagger.io/v2')
const maria = require('../../vendors/json/maria.json')
const mariaPut = require('../../vendors/json/mariaPut.json')

    it('POST User', () => {
        

        return request
            .post('/user')
            .send(maria)
            .then((res) => {
                expect(res.statusCode).toBe(200)
                expect(res.body.code).toEqual(200)
                expect(res.body.message).toEqual(userId.toString())
            })
        
    })//termina POST

    it('GET User', () =>{
        return request
            .get(`/user/${maria.username}`)
            .then((res) =>{
            expect(res.statusCode).toBe(200)
             expect(res.body.firstName).toBe("maria")
        })

    })//fim GET

    it ('PUT User', async () =>{
        
        return await request
            .put('/user/${user.username}')
            .send(mariaPut)
            .then((res) => {
                expect(res.statusCode).toEqual(200)
                //expect(res.body.message).toBe(user.username)
            })
        
    })
    it ('DELETE Pet', async () =>{
        return await request
            .delete(`/user/${mariaPut.username}`)
            .then((res) => {
                expect(res.statusCode).toEqual(200)
                expect(res.body.code).toEqual(200)
                expect(res.body.message).toBe(mariaPut.username)
            })
    })
    
    
})// termina a describe




   