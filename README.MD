# Devsole

> A simple, beautiful console tool for Node.js developers.

Devsole makes your console output more informative, more readable, and more beautiful!
It provides colorful logs, trace/debug support, JSON pretty printing with highlights, timers, banners, tables, and more.

---

## Installation

```bash
npm install devsole
```

Or manually copy `devsole.js` into your project.

---

## Usage

### Step 1: Import Devsole globally

**For CommonJS (`require`)**
```javascript
require('./utils/devsole');
```

**For ESM (`import`)**
```javascript
import './utils/devsole.js';
```

> You only need to import it once at app start (e.g., in `server.js`).

---

## Features

| Function | Description |
|:---|:---|
| `dev_info(message, data?)` | Blue [INFO] log |
| `dev_success(message, data?)` | Green [SUCCESS] log |
| `dev_warn(message, data?)` | Yellow [WARN] log |
| `dev_error(message, data?)` | Red [ERROR] log |
| `dev_debug(message, data?)` | Magenta [DEBUG] log |
| `dev_banner(text?)` | Big ASCII art banner |
| `dev_table(data)` | Render a console table |
| `dev_time(label?)` | Start a timer |
| `dev_timeEnd(label?)` | End and show timer duration |
| `dev_count(label?)` | Count how many times a label was called |
| `dev_clear()` | Clear the console screen |
| `dev_trace(msg?)` | Print a stack trace |
| `dev_json(object, title?)` | Pretty print JSON inside a box |

---

## Example

```javascript
import './utils/devsole.js';

dev_banner('DEVSOLE');
dev_info('Server starting...');
dev_success('Database connected');
dev_warn('Deprecated API used');
dev_error('Something went wrong', { code: 500 });
dev_debug('Debugging app', { user: 'John Dave' });

dev_table([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]);

dev_time('DB Query');
setTimeout(() => dev_timeEnd('DB Query'), 1000);

dev_json({
  user: {
    id: 123,
    name: 'John Dave',
    role: 'Admin',
    permissions: ['read', 'write', 'execute']
  },
  settings: {
    theme: 'dark',
    notifications: true
  }
}, 'User Settings');

```

---

## Requirements

- Node.js 14+
- Packages: `chalk`, `dayjs`, `figlet`

Install them if missing:
```bash
npm install chalk dayjs figlet
```

---

## License

This project is licensed under the **MIT License**.

---

## Author

Made with ❤️ by **jdevc20**

