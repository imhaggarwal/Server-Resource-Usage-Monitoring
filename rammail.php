<?php
	$json=json_decode(file_get_contents('php://input'));
	$email=$json->email;
	$message="Hi Admin,\n  Your server's RAM usage has exceeded 50%. Kindly take a quick action of necessary.";
	mail($email, 'Sever Notification', $message, 'From: no-reply@signzy-assignment.com');
?>