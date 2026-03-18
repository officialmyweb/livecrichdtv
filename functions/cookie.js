export async function onRequest() {

  const cookie = "__hdnea__=st=1773844261~exp=1773865861~acl=/*~hmac=5a47de28e8c4964b93c1609443db1f34df10d3fce1ecc2e09e6a1d62e283c593";

  return new Response(JSON.stringify({
    cookie: cookie
  }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
