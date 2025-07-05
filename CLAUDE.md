# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based blog site with Tailwind CSS styling. The site is a Japanese personal blog ("masa86") that appears to be hosted on GitHub Pages.

## Development Commands

### CSS Development
```bash
npm run dev:css
```
Compiles Tailwind CSS from `./assets/css/input.css` to `./static/css/custom.css` with watch mode enabled.

### Hugo Site Generation
```bash
hugo server
```
Starts the Hugo development server (Hugo must be installed separately).

```bash
hugo
```
Builds the static site to the `public/` directory.

## Architecture

### Key Directories
- `content/` - Markdown content files for blog posts
- `layouts/` - Hugo templates (baseof.html, list.html, single.html)
- `static/` - Static assets (CSS, images, JS)
- `assets/css/` - Source Tailwind CSS files
- `public/` - Generated static site output
- `config.toml` - Hugo configuration

### Styling System
- Uses Tailwind CSS for styling
- PostCSS configuration in `postcss.config.js`
- Custom CSS output to `static/css/custom.css`
- Tailwind config in `tailwind.config.js`

### Content Structure
- Blog posts are in `content/posts/`
- Posts are organized by year (e.g., `2025/`)
- Uses Hugo's slug-based permalinks (`/posts/:slug/`)
- Japanese language content (`languageCode = "ja"`)

## Configuration

- Base URL: `https://masa162.github.io/masa86/`
- Site title: "masa86"
- Language: Japanese
- Permalink structure: `/posts/:slug/`
- Slug generation: Uses filename as slug