<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
require 'lib/PHPMailer.php';
require 'lib/Exception.php';
require 'lib/SMTP.php';

$mail = new PHPMailer(true);

//ініціалізація відправлення 
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'rvartgallery2021@gmail.com';
$mail->Password = 'epili123456789';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

//отримання даних від клієнта
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$theme = trim($_POST['theme']);
$message = trim($_POST['message']);

//додавання електронних пошт
$mail->setFrom('rvartgallery2021@gmail.com', 'Art');//серверна пошта
$mail->addAddress('rvartgallery2021@gmail.com', $name);//друга пошта сайта на яку відправляє серверна
$mail->addReplyTo('rvartgallery2021@gmail.com', 'Information');//друга пошта сайта на яку відправляє серверна
$mail->isHTML(false);
$mail->Subject = "=?UTF-8?B?".base64_encode($theme)."?=";

//формування та відправлення листа
if(strlen($email) > 0 && strlen($email) > 0 && strlen($email) > 0 && strlen($email) > 0)
{
    $mail->Body = "Ім'я: $name\nE-mail: $email\nПовідомлення: $message";
    $mail->send();
    echo '<script>window.location.href = "../pages/feedback.html"</script>';
}

?>