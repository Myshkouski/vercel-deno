#!/usr/bin/env deno run --unstable
	
import { createHttpClient } from "https://deno.land/std@0.154.0/_deno_unstable.ts";

const key = "----BEGIN PRIVATE KEY----...";
const cert = "----BEGIN CERTIFICATE----...";
const client = createHttpClient({ key, cert });

export default () => new Response(`Hello, from Deno v${Deno.version.deno}!`);
