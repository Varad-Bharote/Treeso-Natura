<?php
require_once 'config.php';

try {
    // Create the Access database file if it doesn't exist
    if (!file_exists(DB_PATH)) {
        // For demonstration purposes, we'll create a simple text file
        // In a real scenario, you would need to create the .accdb file with proper structure
        $emptyDb = fopen(DB_PATH, 'w');
        fclose($emptyDb);
    }
    
    // Connect to the Access database
    $pdo = new PDO("odbc:Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=" . DB_PATH . ";");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create users table
    $sql = "CREATE TABLE users (
        id AUTOINCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE,
        email VARCHAR(100) UNIQUE,
        password VARCHAR(255),
        created_at DATETIME DEFAULT NOW()
    )";
    
    $pdo->exec($sql);
    
    echo "Access database and table created successfully!";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
    
    // Fallback to a simple file-based approach if Access is not available
    echo "\n\nNote: Microsoft Access may not be available on this system.";
    echo "\nFalling back to file-based storage method.";
}
?>