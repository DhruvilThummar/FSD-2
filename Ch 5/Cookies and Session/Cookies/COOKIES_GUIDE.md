# Cookies in Express.js

## What are Cookies?

Cookies are small pieces of data stored on the client's browser. They are sent with every HTTP request to the server, making them useful for:
- Storing user preferences
- Tracking sessions
- Maintaining login state
- Analytics

## Setting Cookies

```js
res.cookie('cookieName', 'cookieValue');
```

### With Options

```js
res.cookie('cookieName', 'cookieValue', {
  maxAge: 1000 * 60 * 60 * 24,  // 24 hours
  httpOnly: true,                // Not accessible via client-side JavaScript
  secure: false,                 // Use HTTPS only
  sameSite: 'strict'             // CSRF protection
});
```

## Reading Cookies

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies);  // Access all cookies
  console.log(req.cookies.cookieName);  // Access specific cookie
});
```

## Clearing Cookies

```js
res.clearCookie('cookieName');
```

## Common Cookie Options

| Option | Purpose | Example |
|--------|---------|---------|
| `maxAge` | Cookie lifetime in milliseconds | `{ maxAge: 3600000 }` (1 hour) |
| `expires` | Expiration date | `{ expires: new Date(2025, 0, 1) }` |
| `httpOnly` | Prevent client-side JavaScript access | `{ httpOnly: true }` |
| `secure` | Send over HTTPS only | `{ secure: true }` |
| `sameSite` | CSRF protection | `{ sameSite: 'strict' }` |
| `path` | Cookie path | `{ path: '/' }` |
| `domain` | Cookie domain | `{ domain: 'example.com' }` |

## Example: User Preferences Cookie

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/set-preferences', (req, res) => {
  res.cookie('theme', 'dark');
  res.cookie('language', 'en');
  res.send('Cookies set!');
});

app.get('/get-preferences', (req, res) => {
  const theme = req.cookies.theme || 'light';
  const language = req.cookies.language || 'en';
  res.json({ theme, language });
});

app.listen(3000);
```

## Best Practices

1. **Security**: Use `httpOnly` flag to prevent XSS attacks
2. **Expiration**: Set appropriate `maxAge` values
3. **HTTPS**: Use `secure` flag in production
4. **CSRF**: Use `sameSite` for CSRF protection
5. **Size**: Keep cookies small (4KB max per cookie)
6. **Privacy**: Inform users about cookie usage
