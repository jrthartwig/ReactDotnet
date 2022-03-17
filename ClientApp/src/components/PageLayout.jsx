import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <div>
                <a href="/">React Dotnet</a>
                {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </div>
            <h5><center>React Dotnet Test Application</center></h5>
            <br />
            <br />
            {props.children}
        </>
    );
};