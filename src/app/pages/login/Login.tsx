import { InputLogin } from "./components/InputLogin";


export const Login = () => {

const handleEntrar = () =>{

}

    return (
        <div>
            <form action="">
            <InputLogin/>
                <label htmlFor="">
                    <span>Senha</span>
                    <input type="password" />
                </label>
                <button onClick={handleEntrar} type="button">
                    Entrar
                </button>
            </form>
        </div>
    );
}