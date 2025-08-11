interface SignUpParams {
    uid: string;
    name: string;
    email: string;
    password: string;
    profileURL?: string | null;
}

interface SignInParams {
    email: string;
    idToken: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    profileURL?: string | null;
}
