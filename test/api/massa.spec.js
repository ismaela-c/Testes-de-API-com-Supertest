// Bibliotecas
const supertest = require('supertest')

describe('PetStore Swagger - Entidade User', () => {
    const request = supertest('https://petstore.swagger.io/v2') // BaseURL
    const massa1 = require('../../vendors/json/massaUser')
 
    massa1.array.forEach(({username, id, firstName, lastName}) => {
        it(`POST Pet Data Driven ForEach- ${firstName}`, () =>{
            const user = require('../../vendors/json/maria.json')
            user.id = id
            user.username = username
            user.firstName = firstName
            user.lastName = lastName
        
            return request
                .post('/user')
                .send(user)
                .then((res) => {
                    expect(res.statusCode).toBe(200)
                    expect(res.body.code).toBe(200)
                    expect(res.body.message).toBe(String(id))
                })
        })
        it(`DELETE Pet Data Driven ForEach- ${firstName}`, async() =>{
            return  request
                .delete(`/user/${username}`)
                .then((res) =>{
                    //deletar
                    expect(res.statusCode).toEqual(200)
                    expect(res.body.code).toEqual(200)
                    expect(res.body.message).toEqual(username.toString())
                    
                })
        })
    })//fim massa array
})//fim do describe