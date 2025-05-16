# turborepo-next

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

GitHub: [Xjectro/turborepo-next](https://github.com/Xjectro/turborepo-next)

## Description

This monorepo boilerplate is built with Next.js, TurboRepo, PNPM, and Tailwind CSS. It provides a ready-to-use setup to kickstart new projects quickly.

## Features

- Monorepo management with TurboRepo
- Server-side rendering and static site generation with Next.js
- Preconfigured Tailwind CSS
- TypeScript support
- ESLint & Prettier for code quality
- Shared packages (utils, eslint-config, typescript-config)
- Optional example integrations: Redux Toolkit & Prisma

## Project Structure

```text
├── apps/
│   └── web/                # Next.js application
├── packages/
│   ├── eslint-config/      # Shared ESLint configurations
│   ├── typescript-config/  # Shared TypeScript settings
│   └── utils/              # Utility functions, store, services
├── package.json            # Root dependencies
├── pnpm-workspace.yaml     # PNPM workspace settings
├── turbo.json              # TurboRepo configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js v16+
- PNPM v7+
- Git

### Installation

```powershell
git clone https://github.com/Xjectro/turborepo-next.git
cd turborepo-next
pnpm install
```

### Running the Development Server

```powershell
pnpm turbo run dev --filter=web
```

Open your browser at http://localhost:3000

### Building for Production

```powershell
pnpm turbo run build
pnpm turbo run start --filter=web
```

## Contributing

1. Fork the repository (https://github.com/Xjectro/turborepo-next/fork)
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENCE) file for details.
