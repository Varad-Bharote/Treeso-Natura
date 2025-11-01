<?php
session_start();

// Unset all session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Also clear localStorage (client-side)
?>
<!DOCTYPE html>
<html>
<head>
    <title>Logging out...</title>
</head>
<body>
    <script>
        // Clear localStorage and redirect to index
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    </script>
</body>
</html>