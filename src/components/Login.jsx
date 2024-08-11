import { useForm } from "react-hook-form";
import '../App.css';
import { useNavigate } from 'react-router-dom';

export const Login = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        if(data.email === "admin@gmail.com" && data.password === "admin"){
            navigate('/admin');
        }
    };
    return (
        <div className="login">
            <h2>Login </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Enter email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" placeholder="Enter password" {...register("password")} />
                <button> Submit </button>
            </form>
        </div>
    );
}