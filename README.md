# My Docusaurus Site

A documentation website built with [Docusaurus](https://docusaurus.io/), a modern static website generator powered by React.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20.0
- [Yarn](https://yarnpkg.com/) package manager

## Project Structure

```
my-docusaurus/
├── blog/           # Blog posts
├── docs/           # Documentation pages
├── src/            # React components and pages
│   ├── components/
│   ├── css/
│   └── pages/
├── static/         # Static assets (images, etc.)
├── docusaurus.config.ts  # Site configuration
└── sidebars.ts     # Docs sidebar configuration
```

## Getting Started

### Installation

Install the project dependencies:

```bash
yarn
```

### Local Development

Start the local development server:

```bash
yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build

Generate a production-ready static build:

```bash
yarn build
```

Static content is output to the `build` directory and can be served by any static hosting service.

### Serve Built Site Locally

Preview the production build locally:

```bash
yarn serve
```

### Type Checking

```bash
yarn typecheck
```

## Deployment

### Using SSH

```bash
USE_SSH=true yarn deploy
```

### Without SSH

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

The `deploy` command builds the website and pushes it to the `gh-pages` branch, making it available via GitHub Pages.

## Configuration

The main site configuration is in [`docusaurus.config.ts`](./docusaurus.config.ts). Key settings include:

- **title**: Site title
- **url**: Production URL of the site
- **baseUrl**: Base URL path
- **organizationName** / **projectName**: Used for GitHub Pages deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

This project is open source. See the repository for license details.
