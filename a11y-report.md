# ♿ Accessibility Audit Report (WCAG 2.2 AA)

Scanned all TSX components using static AST analysis (`eslint-plugin-jsx-a11y`).

⚠️ Found 26 WCAG violations.

| File | Line | Rule | Description |
|---|---|---|---|
| `src\app\contact\page.tsx` | 37 | `jsx-a11y/click-events-have-key-events` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| `src\app\contact\page.tsx` | 143 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\app\contact\page.tsx` | 147 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\app\contact\page.tsx` | 151 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\app\greenfield\page.tsx` | 406 | `jsx-a11y/no-noninteractive-element-interactions` | Non-interactive elements should not be assigned mouse or keyboard event listeners. |
| `src\app\modern-workplace\components.tsx` | 471 | `jsx-a11y/no-noninteractive-element-interactions` | Non-interactive elements should not be assigned mouse or keyboard event listeners. |
| `src\components\forms\ConsultationFormCore.tsx` | 152 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\forms\ConsultationFormCore.tsx` | 164 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\forms\ConsultationFormCore.tsx` | 178 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\forms\ConsultationFormCore.tsx` | 191 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\layout\Navbar.tsx` | 577 | `jsx-a11y/no-noninteractive-element-interactions` | Non-interactive elements should not be assigned mouse or keyboard event listeners. |
| `src\components\lumina\LuminaContent.tsx` | 365 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\lumina\LuminaContent.tsx` | 369 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\lumina\LuminaContent.tsx` | 374 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\lumina\LuminaContent.tsx` | 383 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\sections\ContactSection.tsx` | 52 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\sections\ContactSection.tsx` | 56 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\sections\ContactSection.tsx` | 62 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\sections\ContactSection.tsx` | 67 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\sections\ContactSection.tsx` | 83 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\sections\helpdesk-v2\Recognition.tsx` | 340 | `jsx-a11y/click-events-have-key-events` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| `src\components\ui\label.tsx` | 9 | `jsx-a11y/label-has-associated-control` | A form label must be associated with a control. |
| `src\components\v2\WpClientTickerV2.tsx` | 78 | `jsx-a11y/no-noninteractive-element-interactions` | Non-interactive elements should not be assigned mouse or keyboard event listeners. |
| `src\components\v2\WpClientTickerV2.tsx` | 101 | `jsx-a11y/no-noninteractive-element-interactions` | Non-interactive elements should not be assigned mouse or keyboard event listeners. |
| `src\components\wordpress\WpClientTicker.tsx` | 78 | `jsx-a11y/no-noninteractive-element-interactions` | Non-interactive elements should not be assigned mouse or keyboard event listeners. |
| `src\components\wordpress\WpVendors.tsx` | 22 | `jsx-a11y/no-noninteractive-element-interactions` | Non-interactive elements should not be assigned mouse or keyboard event listeners. |
