# SciSsoRs (pronounced "scissors")
...is a Deno-powered, filesystem-based, single-dependency SSR (Server-Side Rendering) server that uses Web Components for interactivity. It's not intended as a production system, but a demo of how simply we can assemble these features using a minimal, modern toolset. The name SciSsoRs is an expansion of the SSR acronym, and echoes the UNIX design philosophy of small, sharp tools. :-)

SciSsoRs uses [Deno](https://docs.deno.com/runtime/manual), which allows a Deno-style import of the Eta templating engine, avoiding NPM and the dreaded node_modules folder, as well as package.json/package-lock.json, etc. Deno also runs [TypeScript](https://www.typescriptlang.org/) natively, without a build step.

[Eta](https://eta.js.org) handles the dynamic aspects of the SSR process, allowing arbitrary JS to be included directly in the HTML file, as well as supporting layouts to reduce boilerplate. Any .html file in the /views hierarchy will be processed by Eta before serving plain HTML to the client.

Routing is filesystem-based, which means any page within the views folder is available using its filesystem path. Non-HTML assets (CSS, client-side JS, images, etc) are pathed from the document root itself. An example structure is supplied, but do whatever works for your project.

[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) are browser-native components that can accomplish a wide range of tasks. SciSsoRs uses them to surgically-replace HTML elements without replacing the entire page. By avoiding non-native front-end frameworks we can rely almost entirely on HTML/CSS for our content (light, fast, SEO-friendly, browser-friendly), enhancing them with bits of interactivity where needed, utilizing "partials" on the server that use Eta to dynamically-generate an HTML fragment and hand it back to the browser. Why receive JSON from the server just to convert it immediately into the HTML you wanted in the first place?

## To run

```deno run --allow-net --allow-read server.ts```

Open browser to http://localhost:8000

## Resources
- [Deno](https://docs.deno.com/runtime/manual)
- [Eta](https://eta.js.org)
  - [Syntax](https://eta.js.org/docs/intro/template-syntax)
  - [Deno Integration](https://eta.js.org/docs/resources/deno)
- Web Components
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
  - [HTML Web Components](https://blog.jim-nielsen.com/2023/html-web-components/) (inspiration for my HTML-forward approach)