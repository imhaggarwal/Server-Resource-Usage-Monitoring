<?php
	$arr=preg_split('/Total Physical Memory:/', shell_exec('systeminfo'));
	$arr=preg_split('/MB/', $arr[1]);
	preg_match_all('/\d/', $arr[1], $re);
	preg_match_all('/\d/', $arr[0], $arr);
	$ram=100*(1-(int)implode('', $re[0])/(int)implode('', $arr[0]));
	echo $ram.' '.explode(' ',shell_exec('wmic cpu get loadpercentage'))[2];
?>