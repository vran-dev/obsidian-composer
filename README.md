[中文](README_zh.md) | English
## Brief

an out-of-box theme for Obsidian, which is designed for reading and writing comfortably.

<img src="screenshot-original.png" />

## Screenshots

You can install `style settings` plugin and change the theme color in the plugin setting.

### Color Scheme

> [!NOTE]
> color scheme change needs to install `style settings` plugin

- Xiá 霞

![xia light](assets/xia-light.png)

![xia dark](assets/xia-dark.png)

- Sù 素

![su light](assets/su-light.png)

![su dark](assets/su-dark.png)

- Qīng 青

![qing light](assets/qing-light.png)

![qing dark](assets/qing-dark.png)

### Text Formatting

![text formatting](assets/text-formatting.png)

### Table Style

![table style](assets/table-style.png)

### Callout Style

![callout style](assets/callout-style.png)

## Thanks

- Task checkbox is referenced from [Minimal Theme](https://github.com/kepano/obsidian-minimal) which is a great theme for Obsidian build by @Kepano

## Development Workflow (settings.yml + composer.css Split)

This theme now separates the Style Settings YAML header from the CSS for better editor support.

Files:

- `settings.yml` – Pure YAML (no wrapping comment). Edit Style Settings options here.
- `composer.css` – Pure CSS body (without the initial `/* @settings ... */` block).
- `build.mjs` – Build script that merges the two into `theme.css`.

Usage:
1. Edit style settings in `settings.yml`.
2. Edit styles in `composer.css`.
3. Run `npm run build` to generate `theme.css`.
4. Load or distribute `theme.css` as the final theme file.

Release Flow:
`npm version patch|minor|major` will automatically:
1. Run `preversion` (which triggers `npm run build`).
2. Bump version and stage `manifest.json`, `versions.json`, and `theme.css`.

Notes:
- Do NOT manually edit the YAML inside `theme.css`; it will be regenerated.
- Only add/change settings in `settings.yml`.
- The build script strips an optional leading comment block from `composer.css` before concatenation.

Future Enhancements (Optional):
- YAML schema validation (e.g. with `js-yaml`) to catch structural errors.
- Skip rewriting `theme.css` when no changes occur (quieter diffs).
- Support multiple YAML fragments under a `settings/` directory auto-merged at build time.

Rollback to single file (if desired):
1. Run `npm run build`.
2. Keep resulting `theme.css`.
3. Remove `settings.yml`, `composer.css`, and `build.mjs`.

Feel free to open an issue if you’d like these enhancements implemented.

