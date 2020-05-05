1. If I had more time, I would: 
    1. Add unit + integration test. Fix lint errors.
    2. Fix bugs with pagination on refining.
    3. Improve results refining with a better understanding of requirement.
    4. Error handling 
    5. Input Validation

2. React hooks and redux hooks
    React hooks:

        ```js
        const SearchForm = () => {
        const { value: city, bind: bindCity, reset: resetCity } = useInput('');
        const { value: filter, bind: bindFilter, reset: resetFilter} = useInput('');
        const [error, setError] = useState(false);
        ```
    
    Redux hooks:

        ```js
        const {currentPage, totalPages} = useSelector(paginatorSelector);
        const { city, filter } = useSelector(filtersSelector);
        const { total_entries }  = useSelector(restaurantsSelector);
        const dispatch = useDispatch();
        ```

3. I wouls Tracked performance issue in production through monitoring CPU usage, memory usage, database connections, network round trips etc.
   I had to improve the speed of app. I performed them by reducing the db round trip by strong quering on db.

4. I would improve the API documentation.(I would use swagger as well.) 
    I would add a filter parameter that filters based on name, area, or address and return a list of restaurants. Refining had to be done per page.
    I would add more attributes to returned restaurants. It was missing rating and cusine types that were to be displayed (mentioned in requirement). 

5. About me

        ```json
        {
            "name": "Afif Patel",
            "age": 31,
            "city": "Toronto",
            "profession": "Full stack engineer",
            "experience": 5,
            "summary": "Innovative and creative software enginneer always looking for new challenges",
            "passions": [
                "Learning",
                "Coding",
                "Soccer"
            ],
            "interests": [
                "Research",
                "Problem solving",
                "Leisure"
            ],
            "values": [
                "honest",
                "responsible",
                "team player"
            ],
            "portfolios": [
                { 
                    "name" : "LinkedIn",
                    "url"  : "https://www.linkedin.com/in/afifpatel/",
                },
                {
                    "name" : "Github",
                    "url"  : "https://github.com/afifpatel/"
                },
                {
                    "name" : "Portfolio Website",
                    "url"  : "http://afifpatel.website/"
                }
            ]
        }
        ```    