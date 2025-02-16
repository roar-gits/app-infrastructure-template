/**
 * Project Structure Reference:
 * /
 * ├── src/              # Application source
 * │   ├── core/         # Business logic
 * │   │   ├── models.ts
 * │   │   ├── services.ts
 * │   │   └── constants.ts
 * │   ├── data/         # Data management
 * │   │   ├── api.ts
 * │   │   ├── store.ts
 * │   │   └── transforms.ts
 * │   ├── ui/           # Presentation
 * │   │   ├── components.tsx
 * │   │   ├── layouts.tsx
 * │   │   └── styles.ts
 * │   ├── hooks/        # Custom hooks
 * │   ├── test/         # Testing utilities
 * │   ├── types/        # Type definitions
 * │   └── utils/        # Utilities
 * └── [config files]    # Project configuration
 */

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from '@app/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
