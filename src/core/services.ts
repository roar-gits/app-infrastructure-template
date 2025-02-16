/**
 * Project Structure Reference:
 * /src
 * ├── core/           # Business logic layer
 * │   ├── models.ts   # Data structures
 * │   ├── services.ts # [current] Business operations
 * │   └── constants.ts
 * ├── data/          # Data management layer
 * └── ui/            # Presentation layer
 */

import type { Initiative } from './models';
import { AppError } from '../utils/errors';

export const AuthService = {
    validateCredentials: (username: string, password: string): boolean => {
        return username.length >= 3 && password.length >= 6;
    }
};

export const InitiativeService = {
    validateInitiative(initiative: Partial<Initiative>): void {
        if (!initiative.title) {
            throw new AppError('Initiative title is required');
        }
        if (!initiative.startDate) {
            throw new AppError('Initiative start date is required');
        }
    },

    formatInitiative(initiative: Initiative): Initiative {
        return {
            ...initiative,
            startDate: new Date(initiative.startDate),
            endDate: initiative.endDate ? new Date(initiative.endDate) : undefined
        };
    }
};
