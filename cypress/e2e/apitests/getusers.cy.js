/// <reference types = "cypress" />


describe('GET Method Practice', ()=> {
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url : 'https://reqres.in/api/users?page=2'
            })
      })

    it('should status code 200', ()=>{
        // cy.request({
        // method: 'GET',
        // url : 'https://reqres.in/api/users?page=2'
        // }).then((res)=>{
        //     expect(res.body.page).to.eq(2)
        // })

        (res)=>{
            expect(res.status).to.eq(200)
            
        }
    })

    it('should be page len 2', ()=>{

        (res)=>{
            expect(res.body.page).to.eq(2)
        }
      
    })

    it('should be len 6', ()=>{

        (res)=>{
            expect(res.body.per_page).to.eq(6)
        }
    })

    it('should be total len 12', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.body.total).to.eq(12)
        })
    })

    it('should be total-pages len 2', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.body.total_pages).to.eq(2)
        })
    })

    it('should be assert for first user', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[0].id).to.eq(7)
            expect(res.body.data[0].email).to.eq("michael.lawson@reqres.in")
            expect(res.body.data[0].first_name).to.eq('Michael')
            expect(res.body.data[0].last_name).to.eq('Lawson')
            expect(res.body.data[0].avatar).to.eq("https://reqres.in/img/faces/7-image.jpg")
        })
    })

    it('should be assert for second user', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[1].id).to.eq(8)
            expect(res.body.data[1].email).to.eq("lindsay.ferguson@reqres.in")
            expect(res.body.data[1].first_name).to.eq('Lindsay')
            expect(res.body.data[1].last_name).to.eq('Ferguson')
            expect(res.body.data[1].avatar).to.eq("https://reqres.in/img/faces/8-image.jpg")
        })
    })

    it('should be assert for third user', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[2].id).to.eq(9)
            expect(res.body.data[2].email).to.eq("tobias.funke@reqres.in")
            expect(res.body.data[2].first_name).to.eq('Tobias')
            expect(res.body.data[2].last_name).to.eq('Funke')
            expect(res.body.data[2].avatar).to.eq("https://reqres.in/img/faces/9-image.jpg")
        })
    })

    it('should be assert for fourth user', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[3].id).to.eq(10)
            expect(res.body.data[3].email).to.eq("byron.fields@reqres.in")
            expect(res.body.data[3].first_name).to.eq('Byron')
            expect(res.body.data[3].last_name).to.eq('Fields')
            expect(res.body.data[3].avatar).to.eq("https://reqres.in/img/faces/10-image.jpg")
        })
    })

    it('should be assert for fifth user', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[4].id).to.eq(11)
            expect(res.body.data[4].email).to.eq("george.edwards@reqres.in")
            expect(res.body.data[4].first_name).to.eq('George')
            expect(res.body.data[4].last_name).to.eq('Edwards')
            expect(res.body.data[4].avatar).to.eq("https://reqres.in/img/faces/11-image.jpg")
        })
    })

    it('should be assert for six user', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[5].id).to.eq(12)
            expect(res.body.data[5].email).to.eq("rachel.howell@reqres.in")
            expect(res.body.data[5].first_name).to.eq('Rachel')
            expect(res.body.data[5].last_name).to.eq('Howell')
            expect(res.body.data[5].avatar).to.eq("https://reqres.in/img/faces/12-image.jpg")
        })
    })
    it('should be assert support url', ()=>{
        cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.support.url).to.eq("https://reqres.in/#support-heading")
            expect(res.body.support.text).to.eq("To keep ReqRes free, contributions towards server costs are appreciated!")
        })
    })
})