import * as newsService from '@/services/newsService'

describe('newsService', () => {
  describe('fetchNews()', () => {
    it('should fetch news', done => {
      newsService.fetchNews()
        .then(data => {
          expect(data.length).to.be.equal(3)
          done()
        })
        .catch(done)
    })
  })
})
