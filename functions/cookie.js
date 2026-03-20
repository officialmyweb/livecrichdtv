export async function onRequest(context) {
  const url = "https://sony.thecricsters.workers.dev/?tvid=s1";

  try {
    const res = await fetch(url);
    const text = await res.text();

    const match = text.match(/const COOKIE = "(.*?)"/);

    const cookie = match ? match[1] : "";

    return new Response(JSON.stringify({
      cookie
    }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600" // 1 hour
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({
      error: err.message
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
