export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "67d70279001bb672766a",
  platform: "come.tarek.aora",
  databaseId: "67d703e7000998ccf955",
  usersCollection: "67d7040b00167f3203fe",
  videosCollection: "67d704410039fa4e749a",
  storageId: "67d705ab0009aa883e38",
};
import { Client, Account, ID } from "react-native-appwrite";

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId); // Your project ID
const account = new Account(client);

// Register User
const register = async () => {
  try {
    const response = await account.create(
      ID.unique(),
      "me@example.com",
      "password",
      "Jane Doe"
    );
    console.log("User registered successfully:", response);
  } catch (error) {
    console.error("Registration error:", JSON.stringify(error, null, 2));
  }
};

export { register };
