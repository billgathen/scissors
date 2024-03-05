import { Eta } from "https://deno.land/x/eta@v3.2.0/src/index.ts"
import { data } from "./data.ts";

const viewPath = Deno.cwd() + "/views";
const eta = new Eta({ views: viewPath, cache: false }) // set cache to true for production

const contentTypes: { [key: string]: string } = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  svg: "image/svg+xml",
  ico: "image/x-icon",
  json: "application/json",
  plain: "text/plain",
  "": "text/plain",
};

const systemData = { people: data.people};

const handler = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  
  try {
    const path = url.pathname === "/" ? "/index.html" : url.pathname;

    const searchParams = Object.fromEntries(url.searchParams.entries());
    const data = { ...systemData, ...searchParams };

    const res = path.endsWith(".html") ? eta.render(path, data) : await Deno.readFile(`.${path}`);

    const contentType = contentTypes[path.split(".").pop() || 'plain'];

    return new Response(res, { status: 200, headers: { "Content-Type": contentType } });
  } catch (err) {
    if (err instanceof Deno.errors.NotFound || err.message.includes("Could not find")) {
      return new Response(await Deno.readFile('./views/404.html'), { status: 404, headers: { "Content-Type": "text/html" } });
    }
    return new Response(`ERROR: ${err.message}`, { status: 500, headers: { "Content-Type": "text/plain" } });
  }
};

Deno.serve({ port: 8000 }, handler);
