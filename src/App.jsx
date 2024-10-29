import "./App.css";
import { Fragment } from "react";
import BankAccount from "./components/bank/BankAccount";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function App() {
  return (
    <Fragment>
      <div className="landing-page">
        <SignedOut>
          <div className="signed-out-message">
            <h1>Welcome to Your Backend Management System</h1>
            <p>Please sign in to continue</p>
            <SignInButton />
          </div>
        </SignedOut>
      </div>
      <SignedIn>
        <UserButton />
        <BankAccount />
      </SignedIn>
    </Fragment>
  );
}

export default App;
