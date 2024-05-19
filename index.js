import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";

const startApp = async () => {
  // Start services

  await UserService.start();
  await EmailService.start();

  try {
    // simulate user creation
    const newUser = await UserService.call("user.createUser", {
      username: "Fani",
      email: "fani@69god.com",
    });
    console.log("New User Created", newUser);

    // Simluate sending email
    const emailResults = await EmailService.call('email.sendEmail', {
        recipient: newUser.email, 
        subject: 'Welcome to our platform',
        content: "Thank you for signing up."
    })

    console.log("Email Results: ", emailResults)

    const users = await UserService.call("user.getUsers");
    console.log("Users: ", users);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await UserService.stop();
  }
};

startApp();
