/**
 * Project Structure Reference:
 * /src
 * ├── core/           # Business logic layer
 * │   ├── models.ts   # Data structures & types
 * │   ├── services.ts # Business operations
 * │   └── constants.ts # Application constants
 * ├── data/          # Data management layer
 * │   ├── api.ts     # [current] External API communication
 * │   ├── store.ts   # State management
 * │   └── transforms.ts # Data transformations
 * └── [other layers] # Other application layers
 */

import axios from 'axios';
import { ENV } from '../core/constants';
import { AppError } from '../utils/errors';
import type { User, Initiative } from '@core/models';

const api = axios.create({
    baseURL: ENV.API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add response interceptor
api.interceptors.response.use(
    response => response,
    error => {
        const appError = new AppError(
            error.response?.data?.message || 'Network error',
            error.response?.status || 500
        );
        return Promise.reject(appError);
    }
);

export const ApiService = {
    initiatives: {
        getAll: () => api.get<Initiative[]>('/initiatives'),
        getById: (id: string) => api.get<Initiative>(`/initiatives/${id}`),
        create: (data: Partial<Initiative>) => api.post<Initiative>('/initiatives', data),
    },
    auth: {
        login: (credentials: { username: string; password: string }) => 
            api.post<{ user: User; token: string }>('/auth/login', credentials),
    }
};
