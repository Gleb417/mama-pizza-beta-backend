<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

$response = []; // Инициализация переменной $response

$mysqli = new mysqli("localhost", "glebrubtso", "Glebuschka@1", "glebrubtso");

if ($mysqli->connect_error) {
    // Обработка ошибки подключения к базе данных
    $response['error'] = 'Ошибка подключения: ' . $mysqli->connect_error;
} else {
    // Проверяем тип запроса
    if ($_SERVER['REQUEST_METHOD'] === 'GET' || $_SERVER['REQUEST_METHOD'] === 'POST') {
        // Получаем имя метода из параметра запроса
        $method = $_GET['method'] ?? null;

        if ($method) {
            // Проверяем, существует ли файл метода
            $methodFilePath = 'methods/' . $method . '.php';
            if (file_exists($methodFilePath)) {
                // Подключаем файл метода
                include_once $methodFilePath;
                // Вызываем метод и сохраняем результат в $response
                $response = $method();
            } else {
                $response['error'] = 'Метод не найден';
            }
        } else {
            $response['error'] = 'Метод не указан';
        }
    } else {
        $response['error'] = 'Недопустимый метод запроса';
    }
}

$mysqli->close(); // Закрытие соединения с базой данных

echo json_encode($response);
?>
