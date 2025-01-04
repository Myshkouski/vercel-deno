#!/usr/bin/env deno run --unstable
	
import { createHttpClient } from "https://deno.land/std@0.154.0/_deno_unstable.ts";

// const key = "----BEGIN PRIVATE KEY----...";
// const cert = "----BEGIN CERTIFICATE----...";
// const client = createHttpClient({ key, cert });
const client = createHttpClient();

export default () => {
	const response = await fetch("https://ipapi.co/json")
	return response
};
