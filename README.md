# SciSsoRs
...is a Deno-powered, filesystem-based, single-dependency SSR (Server-Side Rendering) server that uses HTMX for interactivity. It's not intended as a production system, but a demo of how simply we can assemble these features using modern tools. The name SciSsoRs is an expansion of the SSR acronym, and echoes the UNIX design philosophy of small, sharp tools. :-)

SciSsoRs uses [Deno](https://docs.deno.com/runtime/manual), which allows a Deno-style import of the Eta templating engine, avoiding NPM and the dreaded node_modules folder, as well as package.json/package-lock.json, etc.

[Eta](https://eta.js.org) handles the dynamic aspects of the SSR process, allowing arbitrary JS to be included directly in the HTML file, as well as supporting layouts to reduce boilerplate. Any .html file in the /views hierarchy will be processed by Eta before serving plain HTML to the client.

Routing is filesystem-based, which means any page within the views folder is available using its filesystem path. Non-HTML assets (CSS, client-side JS, images, etc) are pathed from the document root itself. An example structure is supplied, but do whatever works for your project.

[HTMX](https://htmx.org) allows us to surgically-replace HTML elements without replacing the entire page. This means we can use (light, fast, SEO-friendly, browser-friendly) HTML/CSS for our pages, enhancing them with bits of interactivity where needed, by creating "partials" on the server that use Eta to dynamically-generate a new HTML fragment and hand it back to the browser. No more getting JSON from the server just to convert it immediately into the HTML you wanted in the first place!

## To run

```deno run --allow-net --allow-read server.ts```

Open browser to http://localhost:8000

## Resources
- [Deno](https://docs.deno.com/runtime/manual)
- [Eta](https://eta.js.org)
  - [Syntax](https://eta.js.org/docs/intro/template-syntax)
  - [Deno Integration](https://eta.js.org/docs/resources/deno)
- [HTMX](https://htmx.org)