import Image from "next/Image";
import facebookLogo from "../resources/facebookLogo.svg";
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="grid place-items-center">
            <Image
                src={facebookLogo}
                width={400}
                height={400}
                objectFit="contain"
                alt=""
            />
            <h1 onClick={signIn} className="p-5 bg-blue-400 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login
