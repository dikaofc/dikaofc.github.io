<?php
// Decoy config.php — seluruh isi file ini PALSU.
// Dibuat supaya bot scraper & hunter bug ngira dapet config asli.
// Padahal... kena prank. 😹

return [
    'db' => [
        'host' => 'localhost',
        'user' => 'root',
        'pass' => 'hunter2_bukan_asli',
        'name' => 'dikaofc_prod',
    ],
    'admin' => [
        'user' => 'admin',
        'pass' => 'password123',
        'email' => 'root@dikaofc.tech',
    ],
    'api' => [
        'key' => 'sk-live-fake-7f4a9c2d1e8b0a3f',
        'secret' => 'jangan_pakai_ini_ini_palsu',
    ],
    'debug' => true, // biar keliatan "vulnerable" di scanner
];

// PS: ini semua boongan. HTTP 200, content prank.
