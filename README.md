1. **Install dependencies**

   - Install dependencies on the project roots of api and verification apps:

   ```bash
     cd ./api
     npm i

     cd ../verification
     npm i
     cd ..
   ```

2. **Run the Project**

   - Add the Mongo db uri in the `.env` file. Ask the interviewer to whitelist your ip in mongo admin. Start the containers:

   ```bash
     docker-compose up --build
   ```

3. **Teardown**

   - Remove all the containers, including volumes:

   ```bash
     docker-compose down --volumes
   ```
