import { Eta } from "https://deno.land/x/eta@v3.2.0/src/index.ts"
import { people, foods } from "./data/data.ts";
import { contentTypes } from "./config.ts";

const viewPath = Deno.cwd() + "/views";
const eta = new Eta({ views: viewPath, cache: false }) // set cache to true for production

const systemData = { people: people, foods: foods };

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
