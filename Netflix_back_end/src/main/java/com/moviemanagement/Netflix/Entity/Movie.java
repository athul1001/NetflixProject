//package com.moviemanagement.Netflix.Entity;
//
//import java.util.Arrays;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name="movie")
//public class Movie {
//	
//	@Id
//	@Column(name="movie_id", length = 45)
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private int movieid;
//
//	 @Column(name="movie_name", length = 255)
//	    private String moviename;
//
//	    @Column(name="image")
//	    private byte[] image;
//
//	    @Column(name="movie")
//	    private byte[] movie;
//	    
//	    public Movie(int movieid, String moviename, byte[] image, byte[] movie) {
//	        this.movieid = movieid;
//	        this.moviename =moviename;
//	        this.image = image;
//	        this.movie = movie;
//	    }
//
//	    public Movie() {
//	    	
//	    }
//	   
//
//
//		public int getMovieid() {
//			return movieid;
//		}
//
//		public void setMovieid(int movieid) {
//			this.movieid = movieid;
//		}
//
//		public String getMoviename() {
//			return moviename;
//		}
//
//		public void setMoviename(String moviename) {
//			this.moviename = moviename;
//		}
//
//		public byte[] getImage() {
//			return image;
//		}
//
//		public void setImage(byte[] image) {
//			this.image = image;
//		}
//
//		public byte[] getMovie() {
//			return movie;
//		}
//
//		public void setMovie(byte[] movie) {
//			this.movie = movie;
//		}
//
//		@Override
//		public String toString() {
//			return "Movie [movieid=" + movieid + ", moviename=" + moviename + ", image=" + Arrays.toString(image)
//					+ ", movie=" + Arrays.toString(movie) + "]";
//		}
//
//		
//	    
//	    
//}
