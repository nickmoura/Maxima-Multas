<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["name"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $celular = $_POST["mobile"];
    $senha = $_POST["pass"];

    $conexao = mysqli_connect("localhost", "root", "", "cadastro_usuarios");

    if (!$conexao) {
        die("Erro na conexão: " . mysqli_connect_error());
    }

    $query = "INSERT INTO usuarios (nome, cpf, email, celular, senha) VALUES ('$nome', '$cpf', '$email', '$celular', '$senha')";

    if (mysqli_query($conexao, $query)) {
        echo "Cadastro realizado com sucesso, porra!";
    } else {
        echo "Erro ao cadastrar: " . mysqli_error($conexao);
    }

    mysqli_close($conexao);
}
?>