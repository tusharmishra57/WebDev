export default function Signup(){
    return <div className="flex h-screen items-center justify-center">
        <div>
            SignUp
        </div>
        <div>
            <p>Email</p>
            <input type="text" placeholder="type you email"/>
            <p>Password</p>
            <input type="password" placeholder="type you password"/>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </div>
}