<?php
header('Content-Type: text/html');

// Database connection details
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

try {
    // Establish a database connection
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    
    // Retrieve the country parameter from the GET request
    $country = isset($_GET['country']) ? $_GET['country'] : '';
    
    // Prepare and execute the SQL query
    $stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE :country");
    $stmt->execute(['country' => "%$country%"]);
    
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Output the results
    if ($results) {
        echo "<ul>";
        foreach ($results as $row) {
            echo "<li><strong>" . htmlspecialchars($row['name']) . "</strong> is ruled by " . htmlspecialchars($row['head_of_state']) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "No results found.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>