import * as featuredProductsService from '@/services/featuredProductsService'

describe('featuredProductsService', () => {
  describe('fetchProducts()', () => {
    it('should fetch products', done => {
      featuredProductsService.fetchProducts()
        .then(data => {
          expect(data.length).to.be.equal(5)
          done()
        })
        .catch(done)
    })
  })
})
