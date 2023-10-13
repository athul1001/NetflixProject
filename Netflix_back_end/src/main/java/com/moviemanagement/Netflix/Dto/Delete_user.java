package com.moviemanagement.Netflix.Dto;

public class Delete_user {
//	private String email;
//	
//	
//
//	public Delete_user() {
//		
//		// TODO Auto-generated constructor stub
//	}
//
//	public Delete_user(String email) {
//		super();
//		this.email = email;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
	
	 private int userId;
	 //before submit 2
	 private String email;
	 //before submit 2
	 public Delete_user() {
			
			// TODO Auto-generated constructor stub
	}
	 
	 

		public Delete_user(int userId) {
			super();
			this.userId = userId;
		}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	//before submit 2
	public Delete_user(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    //before submit 2
	

//before submit 2

//	public Object getEmail() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//before submit 2
	
	
}
