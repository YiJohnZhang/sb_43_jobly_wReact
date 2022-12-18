import axios from "axios";
// import { response } from "express";
	// https://stackoverflow.com/a/73318202

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyAPI {
  // the token for interactive with the API will be stored here.
  static token = "";
	//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyAPI.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Register */
  static async register(newUserData){
	  
	const response = await this.request('auth/register', newUserData, 'post');
	return response;

  }

  /** Login */
  static async login(userLoginData){

	try{

	  const response = await this.request('auth/token', userLoginData, 'post');
	
	  if(response.token){
		  this.token = response.token;
	  }
	  console.log(response.token);
	  return response.token;

	}catch(error){

		return {error: 'Invalid username/password'};

	}

  }
  
  /** Return all companies in the database */
  static async getAllCompanies(){
	const response = await this.request('companies/');
	return response.companies;
  }

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get companies by searching company name */
  static async searchCompanies(companyName){
	const response = await this.request(`companies/?name=${companyName}`);
	return response.companies;
  }
  
  /** Return all jobs in the database */
  static async getAllJobs(){
	const response = await this.request('jobs/');
	return response.jobs;
  }

  /** Get job listing by id. */
  static async getJobByID(jobID){
	  const response = await this.request(`jobs/${jobID}`);
	  return response.job;
  }

  /** Get job listings by searching a title */
  static async searchJobs(jobTitle){
	  const response = await this.request(`jobs/?title=${jobTitle}`,);
	  return response.jobs;
  }

  /** Get jobs users has already applied to */
  static async getAppliedJobs(username){
	// change it to "this username"
	const response = await this.request(`users/${username}/jobs`);
	console.log(response.appliedJobs);
	return response.appliedJobs;
  }

  /** Apply to job listing by job id. */
  static async applyToJobByID(username, jobID){
	  const response = await this.request(`users/${username}/jobs/${jobID}`, {}, 'post');
	  return response.applied;
	}

	/** Get profile details */
	static async getProfileDetails(username){

		const response = await this.request(`users/${username}`);
		if(typeof response.user.isAdmin === 'boolean') delete response.user.isAdmin;
			// this is on the API...if `isAdmin` is private, there should be another endpoint that delivers a web-safe user data --without `isAdmin`.
		
		return response.user;

	}

	/** Update profile */
	// ok, so apparently the "confirm password" is just to update password not to check it .______________________.
	// and `/token` is the login route...
	static async updateProfile(username, newUserData){
		
		if(newUserData.username) delete newUserData.username;
		if(newUserData.applications) delete newUserData.applications;
		
		const response = await this.request(`users/${username}`, newUserData, 'patch');
		return response.user;

	}

}

export default JoblyAPI;
