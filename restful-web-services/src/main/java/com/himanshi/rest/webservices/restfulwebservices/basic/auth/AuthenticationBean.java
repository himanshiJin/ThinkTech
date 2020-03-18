package com.himanshi.rest.webservices.restfulwebservices.basic.auth;

public class AuthenticationBean{

	private String message;

	public String getMessage() {
		return message;
	}

	public AuthenticationBean(String message) {
		this.message = message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
