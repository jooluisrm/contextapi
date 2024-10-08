import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";

export const ShowData = () => {

    const { age, name } = useContext(Context);

    return (
        <div>
            Tela ShowData de {name}!
            <br />
            <Link to={'/'}>Voltar para SignUp</Link>
        </div>
    );
}