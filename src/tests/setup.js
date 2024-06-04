import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})