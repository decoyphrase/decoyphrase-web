# Decoy Phrase Landing Platform

## Project Abstract

The Decoy Phrase Landing Platform is a high-assurance web application designed to serve as the central trust anchor for the Decoy Phrase ecosystem. It provides a secure mechanism for users to protect their seed phrases through the "Security Through Separation" methodology. The platform facilitates educational simulations, real-time on-chain metric transparency (leveraging Arweave and AO), and centralized distribution of multi-platform binaries. This repository houses the frontend interface, built to deliver high performance, type safety, and responsive design across all devices.

## Architecture

The application is built on a modern, component-driven architecture designed for scalability and maintainability.

- **Frontend Framework:** Next.js 16 (App Router) utilizing React 19 for server-side rendering and static generation.
- **Styling System:** Tailwind CSS v4 for utility-first, responsive styling.
- **State Management:**
  - **Server State:** React Query (@tanstack/react-query) for efficient data fetching, caching, and synchronization.
  - **Client State:** Zustand for lightweight, distinct global state management.
- **Caching Layer:** Redis (via Upstash) for high-performance edge caching of API responses and metrics.
- **Validation:** Zod for robust runtime schema validation of forms and API data.
- **Containerization:** Docker multi-stage builds for optimized production images.

This architecture ensures a clear separation of concerns, robust type safety via TypeScript, and optimal performance through edge caching and server-side rendering strategies.

## Prerequisites

Ensure the following tools are installed in your development environment:

- **Node.js** v20.0.0 or higher
- **npm** v10.0.0 or higher
- **Docker** (optional, for containerized execution)
- **Git**

## Installation

Follow these steps to set up the development environment:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/decoyphrase/decoyphrase-web.git
    cd decoyphrase-web
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**

    Copy the example environment file to create your local configuration.

    ```bash
    cp .env.example .env.local
    ```

## Configuration

The application requires specific environment variables to function correctly. Configure the following variables in your `.env.local` file:

**Application Scopes**
| Variable | Description | Required |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | Base URL of the application (e.g., http://localhost:3000) | Yes |
| `NEXT_PUBLIC_APP_NAME` | Display name of the application | Yes |

**Caching (Redis/Upstash)**
| Variable | Description | Required |
| :--- | :--- | :--- |
| `UPSTASH_REDIS_REST_URL` | REST URL for Upstash Redis instance | Yes |
| `UPSTASH_REDIS_REST_TOKEN` | REST Token for authentication | Yes |

**External Integrations**
| Variable | Description | Required |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_ARWEAVE_GATEWAY` | Arweave gateway URL (e.g., https://arweave.net) | Yes |
| `COINGECKO_API_KEY` | API Key for CoinGecko (optional for rate limits) | No |
| `DISCORD_WEBHOOK_URL` | Webhook URL for feedback notifications | Yes |
| `GOOGLE_SHEETS_API_KEY` | API Key for Google Sheets integration | Yes |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Target Spreadsheet ID for data storage | Yes |

**Security & Rate Limiting**
| Variable | Description | Required |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`| Cloudflare Turnstile Site Key | Yes |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile Secret Key | Yes |
| `RATE_LIMIT_REQUESTS_PER_MINUTE` | Max requests per minute per IP | Yes (Default: 60) |

## Usage

### Development Server

Start the application in development mode with hot-reloading enabled:

```bash
npm run dev
```

Access the application at `http://localhost:3000`.

### Production Build

Build the application for production deployment:

```bash
npm run build
npm run start
```

### Docker Execution

The project includes a multi-stage `Dockerfile` and `docker-compose.yml` for containerized environments.

**Build and Run with Docker Compose:**

```bash
docker-compose up --build
```

**Run Standalone Container:**

```bash
docker build -t decoyphrase-web .
docker run -p 3000:3000 decoyphrase-web
```

## Testing & Quality Assurance

The project enforces code quality through strict static analysis.

**Run Static Analysis Suite:**
This command executes TypeScript type checking, ESLint rules, and Prettier formatting checks.

```bash
npm run validate
```

_Note: Comprehensive unit and integration testing suites are scheduled for future architectural updates. Currently, code quality is maintained via rigorous static typing and linting rules._

## Project Structure

The codebase follows a modular Feature-Sliced Design pattern:

```text
/decoyphrase-web
├── app/                    # Next.js App Router (Page entries & API routes)
│   ├── api/                # Edge Runtime API handlers
│   └── (routes)/           # Route groups and page definitions
├── components/             # React Component Library
│   ├── ui/                 # Atomic design elements (buttons, inputs)
│   ├── layout/             # Structural components (Navbar, Footer)
│   └── features/           # Domain-specific feature modules
├── lib/                    # Core Business Logic & Utilities
│   ├── api/                # External API clients
│   ├── hooks/              # Custom React Hooks
│   └── query/              # React Query configurations
├── stores/                 # Global State Management (Zustand)
├── types/                  # TypeScript Type Definitions
├── constants/              # System-wide constant values
└── config/                 # Static configuration files
```

## Contributing

We welcome contributions from the community. Please adhere to the following guidelines:

1.  **Fork and Clone:** Fork the repository and create a local branch.
2.  **Standards:** Ensure all code passes strict type checking and linting (`npm run validate`).
3.  **Conventional Commits:** Use [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages.
4.  **Pull Request:** Submit a Pull Request with a clear description of changes.

For detailed instructions, refer to the [Contributing Guide](./docs/CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for complete details.
