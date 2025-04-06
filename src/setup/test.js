import { afterEach } from  'vitest' 
import { cleanup } from  '@testing-library/react' 
import  '@testing-library/jest-dom/vitest' 

// esegue una pulizia dopo ogni caso di test (ad esempio la pulizia di jsdom) 
afterEach ( () => { 
  cleanup (); 
})