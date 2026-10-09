import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

// Mocks installés au niveau module (pas dans beforeAll)
{
  // Mock matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })

  // Mock IntersectionObserver
  globalThis.IntersectionObserver = class IntersectionObserver {
    readonly root = null
    readonly rootMargin = ''
    readonly thresholds = []
    disconnect() {}
    observe() {}
    takeRecords() {
      return []
    }
    unobserve() {}
  }

  // Mock ResizeObserver
  globalThis.ResizeObserver = class ResizeObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  }

  // Mock scrollTo
  window.scrollTo = vi.fn()

  // Mock localStorage
  const createStorageMock = () => {
    let store: Record<string, string> = {}
    return {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key]
      }),
      clear: vi.fn(() => {
        store = {}
      }),
      get length() {
        return Object.keys(store).length
      },
      key: vi.fn((index: number) => Object.keys(store)[index] || null),
    }
  }

  Object.defineProperty(window, 'localStorage', {
    value: createStorageMock(),
    writable: true,
  })
  Object.defineProperty(window, 'sessionStorage', {
    value: createStorageMock(),
    writable: true,
  })
}
