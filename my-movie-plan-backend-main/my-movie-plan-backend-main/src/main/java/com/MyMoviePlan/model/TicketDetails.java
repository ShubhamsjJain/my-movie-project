package com.MyMoviePlan.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


public class TicketDetails {

    private String auditoriumName;

    private String showName;

    private String showTiming;

    private double amount;

    private String movieName;

    private String movieImage;

    private String movieBgImage;

	public TicketDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TicketDetails(String auditoriumName, String showName, String showTiming, double amount, String movieName,
			String movieImage, String movieBgImage) {
		super();
		this.auditoriumName = auditoriumName;
		this.showName = showName;
		this.showTiming = showTiming;
		this.amount = amount;
		this.movieName = movieName;
		this.movieImage = movieImage;
		this.movieBgImage = movieBgImage;
	}
    
    
}
