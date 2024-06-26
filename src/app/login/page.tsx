import LoginForm from "@/app/login/LoginForm";


const getToken = async (): Promise<{ csrfToken: string }> => {
    const req = await fetch(`${process.env.API_BASE}/api/auth/csrf`);
    return await req.json();
};

const Login = async () =>{
    try {
        const token = await getToken();
        return <div className={"w-full flex content-center justify-center"}>

            <LoginForm csrfToken={token.csrfToken}/>
        </div>
    } catch (e) {
        return <div></div>
    }
}

export default Login
