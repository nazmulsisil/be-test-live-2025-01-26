1. **Run the Project**

   - Add the Mongo db uri in the `.env` file. Ask the interviewer to whitelist your ip in mongo admin. Start the containers:

   ```bash
     docker-compose up --build
   ```

2. **Teardown**

   - Remove all the containers, including volumes:

   ```bash
     docker-compose down --volumes
   ```
