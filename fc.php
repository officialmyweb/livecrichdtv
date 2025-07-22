<?php
header('Content-Type: application/json');

// Step 1: Fetch JSON from GitHub
$url = "https://raw.githubusercontent.com/Jitendraunatti/fancode/refs/heads/main/data/fancode.json";
$json = file_get_contents($url);

if (!$json) {
    http_response_code(500);
    echo json_encode(["error" => "Unable to fetch source JSON."]);
    exit;
}

// Step 2: Decode original JSON
$data = json_decode($json, true);

if (!isset($data['matches'])) {
    http_response_code(500);
    echo json_encode(["error" => "Invalid source format."]);
    exit;
}

// Step 3: Transform data
$transformedMatches = [];

foreach ($data['matches'] as $match) {
    $team1 = $match['teams'][0] ?? [];
    $team2 = $match['teams'][1] ?? [];

    $transformedMatches[] = [
        "event_category" => $match['category'],
        "title" => $match['title'],
        "src" => $match['image'],
        "team_1" => $team1['name'] ?? "",
        "team_2" => $team2['name'] ?? "",
        "status" => $match['status'],
        "event_name" => $match['tournament'],
        "match_name" => $match['title'],
        "match_id" => ($team1['id'] ?? 0) . '-' . ($team2['id'] ?? 0),
        "startTime" => $match['startTime'],
        "dai_url" => $match['dai_stream'],
        "adfree_url" => $match['adfree_stream']
    ];
}

// Step 4: Output transformed JSON
echo json_encode(["matches" => $transformedMatches], JSON_PRETTY_PRINT);
?>
