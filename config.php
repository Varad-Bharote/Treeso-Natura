<?php
// Microsoft Access Database configuration
define('DB_PATH', realpath(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'auth_system.accdb');

// JWT Secret Key
define('JWT_SECRET', 'your_secret_key_here');

try {
    // For Windows with Microsoft Access
    $pdo = new PDO("odbc:Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=" . DB_PATH . ";");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    // If Access database connection fails, we'll create it on first run
    // This is a simplified approach for demonstration
    // In production, proper error handling would be needed
}
?>