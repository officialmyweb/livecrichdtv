export async function onRequestGet() {

  const API = "https://pkll.xojiv79335.workers.dev/";

  try {

    const response = await fetch(API, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const data = await response.json();

    let cookie = "";

    for (const channel of data) {
      if (channel.cookie) {
        cookie = channel.cookie;
        break;
      }
    }

    return new Response(JSON.stringify({
      cookie: cookie
    }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (err) {

    return new Response(JSON.stringify({
      error: "Failed to fetch cookie"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });

  }

}
