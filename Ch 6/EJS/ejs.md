# EJS (Embedded JavaScript) Syntax Reference

## EJS Tags

| Tag | Purpose | Example |
|-----|---------|----------|
| `<% %>` | Execute JavaScript logic (no output) | `<% if (user) { %>` |
| `<%= %>` | Output value with HTML escaping | `<%= user.name %>` |
| `<%- %>` | Output raw HTML (unescaped) | `<%- htmlContent %>` |
| `<%# %>` | Comment (not executed or rendered) | `<%# This is a comment %>` |
| `<%%` | Print literal `<%` | `<%%` outputs `<%` |

## Common Usage Examples

```ejs
<!-- Display variables -->
<h1><%= title %></h1>

<!-- Conditional logic -->
<% if (user.isAdmin) { %>
  <p>Admin Dashboard</p>
<% } %>

<!-- Loops -->
<ul>
  <% users.forEach(function(user) { %>
    <li><%= user.name %></li>
  <% }); %>
</ul>

<!-- Raw HTML -->
<%- renderContent() %>
```