package com.moviemanagement.Netflix.Dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class UserDTO {

	
		private int userid;
	    private String username;
	    private String email;
	    private String password;
	    //new add
	    private String newEmail; 
	    private String newPassword; 
	   
		public UserDTO(int userid, String username, String email, String password) {
			super();
			this.userid = userid;
			this.username = username;
			this.email = email;
			this.password = password;
		}
	    
	     public UserDTO(){
	    	 
	     }

		public int getUserid() {
			return userid;
		}

		public void setUserid(int userid) {
			this.userid = userid;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
		
//new add
	    public String getNewEmail() {
	        return newEmail;
	    }

	    public void setNewEmail(String newEmail) {
	        this.newEmail = newEmail;
	    }

	    public String getNewPassword() {
	        return newPassword;
	    }

	    public void setNewPassword(String newPassword) {
	        this.newPassword = newPassword;
	    }

		@Override
		public String toString() {
			return "UserDTO [userid=" + userid + ", username=" + username + ", email=" + email + ", password="
					+ password + ", newEmail=" + newEmail + ", newPassword=" + newPassword + "]";
		}


		
	     
	     
	
}
