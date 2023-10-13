package com.moviemanagement.Netflix.Dto;

public class ResetPassDTO {
	private String email;
	private String newPassword;
	private String newPassword_2;
	
	
	
	
	
	public ResetPassDTO() {
		
		// TODO Auto-generated constructor stub
	}
	public ResetPassDTO(String email, String newPassword, String newPassword_2) {
		super();
		this.email = email;
		this.newPassword = newPassword;
		this.newPassword_2 = newPassword_2;
	}
	public String getEmail() {
		return email;
	}
	public void setCurrentPassword(String email) {
		this.email = email;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public String getNewPassword_2() {
		return newPassword_2;
	}
	public void setNewPassword_2(String newPassword_2) {
		this.newPassword_2 = newPassword_2;
	}
	
	
	
	
	
	
}
