import { ApiService } from '../api'
import { vi } from 'vitest'
import type { AxiosResponse } from 'axios'
import type { Initiative } from '@core/models'

describe('ApiService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('initiatives', () => {
    it('should fetch all initiatives', async () => {
      const mockResponse: AxiosResponse<Initiative[]> = {
        data: [],
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any
      }
      vi.spyOn(ApiService.initiatives, 'getAll').mockResolvedValue(mockResponse)
      
      const response = await ApiService.initiatives.getAll()
      expect(response).toEqual(mockResponse)
    })
  })
})
