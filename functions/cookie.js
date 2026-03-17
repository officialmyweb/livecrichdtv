export async function onRequest() {
  try {
    const url = "https://pkll.xojiv79335.workers.dev/";

    const res = await fetch(url);
    const data = await res.json();

    // Agar array hai toh first item le lo
    const firstItem = Array.isArray(data) ? data[0] : data;

    const cookie = firstItem.cookie;

    return new Response(JSON.stringify({
      cookie: cookie
    }), {
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({
      error: err.toString()
    }), { status: 500 });
  }
}
