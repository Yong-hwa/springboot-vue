package kr.co.yong.bootvue.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@RequestMapping(value = "/api/hello")
	public String hello() {
		return "Hello SpringBoot Application";
	}

}