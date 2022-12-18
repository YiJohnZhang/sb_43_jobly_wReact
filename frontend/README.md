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
|07|jobly: styling, profile editing|2022-12-16|21:16 - 23:13|117|
|08|applied (add `GET` for users-jobs join), api (login/signup), local storage|2022-12-17|10:57 - 11:56|59|
|09|localStorage, applied toggling, login & singup routes. argth. **still can't get local storage to work** |2022-12-17|15:02 - 16:38|96|
|10|**iohlaudfsaifhjdklosashdfjkl finally got `localStorage` working**. login/signup & logout working, just need to finish up applied/apply job|2022-12-17|20:04 - 22:21|137|
|11|apply to job functionality|2022-12-18|10:43 - 11:23|40|
|12|continue job application function|2022-12-18|13:53 - :||
|13||2022-12-18|1: - :||
|14|cleanup `README.md`|2022-12-18|1: - :||
||||**Total Time**| minutes+3 hrs (for debugging `useLocalStorage` hook|
11	12
844

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
	- applied function / job applications function