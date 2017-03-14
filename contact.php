<?php

// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['name'];

$tel = $_POST['tel'];

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "zawislak@lukaszzawislak.pl";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "chesterxp7@wp.pl";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Formularz kontaktowy z portfolio";

// Przygotowujesz treść wiadomości
$wiadomosc = "Formularz kontaktowy.\n";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Numer kontaktowy: " . $tel . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Dodajemy UTF-8 do naglowka naszej wiadomości
$naglowek = "";
$naglowek .= "Od:" . $odkogo . " \n";
$naglowek .= "Content-Type:text/plain;charset=utf-8";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, $naglowek);

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=potwierdzenie.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>