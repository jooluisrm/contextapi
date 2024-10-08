import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";

export const ShowData = () => {

    const { state, dispatch } = useContext(Context);

    return (
        <div>
            <h3>Tela ShowData</h3>

            {state.user.name && state.user.age &&
                <>
                    Meu Nome é: {state.user.name} <br />
                    Eu Tenho {state.user.age} anos.
                </>
            }
            {!state.user.name && !state.user.age &&
                <p>Não há informações</p>
            }
            
            <br />
            <Link to={'/'}>Voltar para SignUp</Link>
        </div>
    );
}