# sb_43_jobly_w_react
Jobly with React. Springboard Cumulative Project, publicy viewable.

**Live Link**:

## Time Tracker
|Entry No.|Assignment|Date|Time|Time Elasped (min)|
|-|-|-|-|-|
|01|`README.md`|2022-12-12|16:49 - 16:52|3|
|02|start, Jobly `api` preliminary, basic components|2022-12-15|20:08 - 22:03|115|
|03|continue jobly (pages skeleton)|2022-12-16|09:12 - 10:43|91|
|04|continue jobly (api call). paused because of webpack error.|2022-12-16|14:18 - 15:37|79|
|05|continue jobly|2022-12-16|17:10 - 17:53|42|
|06|continue jobly, found out error why database server didn't work|2022-12-16|19:42 - 20:47|65|
|07|jobly: styling, api (login/signup), applied (add `GET`), local storage|2022-12-16|21:16 - 23:13||
|08||2022-12-|: - :||
|09||2022-12-|: - :||
||||**Total Time**| minutes|
06	07
395 

```sh
App
├──	Navigation
└──	Router (Align Right otherwise)
	├── Home
	|	└──	displays username and a message
	├──	Company
	|	└──	company, some dummy text, and logo if applicable in a div card. click on it to load the company name route.
	├──	Company/CompanyName
	|	└──	company, company name, (no logo), same display as the job board and job listing has matching functionality (see `Jobs`) minus the dynamic search field.
	├──	Jobs
	|	├──	job title bolded, company name, salary, equity, apply button (prevent default) but will toggle between `apply` and `applied`.
	|	└──	has search field, dynamic (api querying, useeffect lol)
	├──	Profile
	|	└──	Controlled Form w/ `first name`, `last name`, `email`, and `password` (for verification)
	└── Align Left: Logout or (Signup & Sign In)
```

- todo:
	- profile page	`d`+updating...
	- login/signup
	- current use w/ local storage
	- routing: protect routes (uncomment)
	- applied function
	- styling	`d`

- in 2 hours time:
	- api.singup
	- applied function
	- styling


- `navbar.js`: authcontext for nvabar (S3)

- company & jobs	
- s6: user + protecc views
- s9: job applications
- s10: deploy

- routes to protect: basically all except for `/`, `/login`, and `/signup`; last two is protected if a user session exists.


## Specifications
- 
- 
- **Further Study**
  - 
  - 
