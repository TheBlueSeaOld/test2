<?php 
namespace Home\Controller;
use Gregwar\Captcha\CaptchaBuilder;

class GitController{
	public function index()
	{
		$builder = new CaptchaBuilder;
		$builder->build();
		header('Content-type: image/jpeg');
		$builder->output();
	}
}



?>