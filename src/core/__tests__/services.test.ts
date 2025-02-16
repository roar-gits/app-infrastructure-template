import { InitiativeService, AuthService } from '../services'
import { AppError } from '../../utils/errors'  // Fixed relative path

describe('Services', () => {
  describe('AuthService', () => {
    it('validates credentials correctly', () => {
      expect(AuthService.validateCredentials('user', 'password123')).toBe(true)
      expect(AuthService.validateCredentials('a', 'short')).toBe(false)
    })
  })

  describe('InitiativeService', () => {
    it('validates initiative requirements', () => {
      expect(() => InitiativeService.validateInitiative({}))
        .toThrow(AppError)
      
      expect(() => InitiativeService.validateInitiative({
        title: 'Test',
        startDate: new Date()
      })).not.toThrow()
    })
  })
})
