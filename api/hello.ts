#!/usr/bin/env deno run --version v2.1.4

export default () => new Response(`Hello, from Deno v${Deno.version.deno}!`);
