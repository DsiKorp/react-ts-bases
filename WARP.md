# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a TypeScript learning project ("react-ts-bases") focused on JavaScript/TypeScript fundamentals in preparation for React development. It's a Vite-powered educational codebase organized as numbered lessons in the `src/bases/` directory.

## Development Commands

### Running the application
```pwsh
npm run dev
```
Starts Vite dev server (typically on http://localhost:5173)

### Building for production
```pwsh
npm run build
```
Compiles TypeScript and builds with Vite

### Preview production build
```pwsh
npm run preview
```
Preview the production build locally

## Architecture & Structure

### Module System & Entry Point
- **Entry point**: `src/main.ts` - imports lessons via commented/uncommented import statements
- The active lesson is controlled by uncommenting its import in `main.ts`
- Only one lesson module is typically active at a time

### Project Organization

**src/bases/**: Educational modules demonstrating JavaScript/TypeScript fundamentals
- Numbered sequentially (01-11) representing lesson progression
- Each module is self-contained and can be run independently
- Topics: variables, functions, destructuring, promises, async/await, fetch API

**src/data/**: Shared data models and type definitions
- `heroes.data.ts`: Contains Hero interface and Owner enum for practice exercises
- `giphy.response.ts`: Complete TypeScript interfaces for Giphy API responses
- These provide realistic data structures for learning exercises

### TypeScript Configuration
- Strict mode enabled with comprehensive linting rules
- Target: ES2020 with modern module resolution (bundler mode)
- `noUnusedLocals` and `noUnusedParameters` enforced
- All code must pass TypeScript compilation (`tsc`) before build

### Working with Lessons

**To switch between lessons:**
1. Open `src/main.ts`
2. Comment out the current lesson import
3. Uncomment the desired lesson import
4. The dev server will hot-reload automatically

**Lesson dependencies:**
- Lessons 08-11 depend on data models in `src/data/`
- `08-imp-exp.ts` demonstrates the import/export patterns used throughout
- Later lessons (09-11) build on async patterns progressively

### Code Style Patterns
- Prefer arrow functions for simple operations
- Use explicit return types for exported functions
- Type interfaces are defined inline or imported from `data/` modules
- JSDoc comments used for exported utility functions
- Enum pattern: Use string enums for type-safe constants (see `Owner` enum)

### External API Usage
- Giphy API key is hardcoded in `11-async-await.ts` (educational context only)
- API responses have complete TypeScript interfaces in `src/data/giphy.response.ts`
- Async/await pattern preferred over `.then()` chains for new code
