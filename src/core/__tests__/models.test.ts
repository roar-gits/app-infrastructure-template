import type { Initiative, User } from '../models'

describe('Models', () => {
  describe('Initiative', () => {
    it('should have correct type structure', () => {
      const initiative: Initiative = {
        id: '1',
        title: 'Test Initiative',
        description: 'Test Description',
        status: 'planned',
        startDate: new Date(),
      }
      expect(initiative).toHaveProperty('id')
      expect(initiative).toHaveProperty('title')
      expect(initiative).toHaveProperty('status')
    })
  })

  describe('User', () => {
    it('should have correct type structure', () => {
      const user: User = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        role: 'user'
      }
      expect(user).toHaveProperty('id')
      expect(user).toHaveProperty('email')
      expect(user).toHaveProperty('role')
    })
  })
})
