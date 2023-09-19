# Free lunch app
   - Endpoint: `/api/users/register`
   - Method: `POST`
   - Description: Allows a user to register with the app.
   - Request Body:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "phoneNumber": "1234567890",
       "password": "password",
       "bankNumber": "123456789",
       "bankCode": "123",
       "bankName": "Bank of Lunch"
     }
     ```
   - Response: User object or success message.

2. **User Login**
   - Endpoint: `/api/users/login`
   - Method: `POST`
   - Description: Allows a user to log in.
   - Request Body:
     ```json
     {
       "email": "john@example.com",
       "password": "password"
     }
     ```
   - Response: User object with authentication token or an error message.

3. **Create Organization**
   - Endpoint: `/api/organizations/create`
   - Method: `POST`
   - Description: Allows an admin user to create a new organization.
   - Request Body:
     ```json
     {
       "name": "HNG",
       "lunchPrice": 10.0,
       "currency": "USD"
     }
     ```
   - Response: Organization object or an error message.

4. **Send Organization Invite**
   - Endpoint: `/api/organizations/invite`
   - Method: `POST`
   - Description: Allows an admin user to send an invitation to join the organization.
   - Request Body:
     ```json
     {
       "email": "jane@example.com"
     }
     ```
   - Response: Invitation object or an error message.

5. **Send Free Lunch**
   - Endpoint: `/api/lunches/send`
   - Method: `POST`
   - Description: Allows a user to send a free lunch to another user.
   - Request Body:
     ```json
     {
       "receiverId": "receiver_id",
       "quantity": 2,
       "note": "Enjoy your lunch!"
     }
     ```
   - Response: Lunch object or an error message.

6. **Process Withdrawal Request**
   - Endpoint: `/api/withdrawals/process`
   - Method: `POST`
   - Description: Allows the admin to process a withdrawal request.
   - Request Body:
     ```json
     {
       "userId": "user_id",
       "amount": 50
     }
     ```
   - Response: Withdrawal object or an error message.

7. **Update User Profile Picture**
   - Endpoint: `/api/users/update-profile-picture`
   - Method: `PUT`
   - Description: Allows a user to update their profile picture.
   - Request Body:
     ```json
     {
       "profilePicture": "profile_picture_url"
     }
     ```
   - Response: Updated user object or an error message.

8. **Get Organization Wallet Balance**
   - Endpoint: `/api/organizations/wallet-balance`
   - Method: `GET`
   - Description: Allows users to check the organization's lunch wallet balance.
   - Response: Wallet balance or an error message.

9. **Update Organization Wallet Balance**
   - Endpoint: `/api/organizations/update-wallet-balance`
   - Method: `PUT`
   - Description: Allows the admin to update the organization's lunch wallet balance.
   - Request Body:
     ```json
     {
       "newBalance": 1000
     }
     ```
   - Response: Updated wallet balance or an error message.

# UTILITY FUNCTIONS
  
- createUser("uzo somebody", "email@example.com", 1234567890, "hashed_password", "123456789", "123", "Bank of Lunch", 0)
- createOrganization("Foodies Inc.", 10.0, "USD")
- sendOrganizationInvite("email@example.com", "invite_token", now() + 3600) # TTL is one hour
- sendFreeLunch("sender_id", "receiver_id", 2, "Enjoy your lunch!")
- processWithdrawal("user_id", 50)
- updateUserProfilePicture("user_id", "profile_picture_url")
- getOrganizationWalletBalance("org_id")
- updateOrganizationWalletBalance("org_id", 1000)

