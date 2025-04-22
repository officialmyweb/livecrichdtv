<?php
// Allow only requests from your domain
$allowedDomain = 'livecrichdxtv.pages.dev';
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (strpos($referer, $allowedDomain) === false && strpos($origin, $allowedDomain) === false) {
    http_response_code(403);
    echo "Access Denied";
    exit;
}

// Get the requested path
$path = ltrim($_SERVER['REQUEST_URI'], '/');

// Target stream URL
$targetURL = "https://astro.noobmaster.xyz/stream.php/" . $path;

// Initialize cURL
$ch = curl_init($targetURL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);

// Forward original headers (optional: you may filter sensitive headers here)
$headers = [];
foreach (getallheaders() as $name => $value) {
    $headers[] = "$name: $value";
}
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Execute request
$response = curl_exec($ch);
$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$header = substr($response, 0, $header_size);
$body = substr($response, $header_size);
curl_close($ch);

// Forward the status code
http_response_code($http_code);

// Forward headers and set CORS
foreach (explode("\r\n", $header) as $responseHeader) {
    if (stripos($responseHeader, 'Content-Type:') === 0) {
        header($responseHeader);
    }
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS");

// Output the body
echo $body;
?>
