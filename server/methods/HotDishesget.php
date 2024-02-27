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
        $result = $mysqli->query("SELECT imageHD, nameHD, descriptionHD, priceHD FROM HotDishes");

        if ($result) {
            if ($result->num_rows > 0) {
                $data = [];

                while ($row = $result->fetch_assoc()) {
                    $data[] = $row;
                }

                $response = $data;
            } else {
                $response['error'] = 'Нет данных о пиццах';
            }
            $result->close(); // Закрытие результата запроса
        } else {
            $response['error'] = 'Ошибка выполнения запроса: ' . $mysqli->error;
        }
    } else {
        $response['error'] = 'Неподдерживаемый метод запроса';
    }
}

$mysqli->close(); // Закрытие соединения с базой данных

echo json_encode($response);
?>
