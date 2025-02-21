import peaje from '../assets/images/peaje.png';
import logo from '../assets/logos/simon-pay.svg';
import sello from '../assets/logos/sello.svg';
import vector1 from '../assets/logos/vector1.svg';
import vector2 from '../assets/logos/vector2.svg';
import vector3 from '../assets/logos/vector3.svg';

const Login = ({ toggleDashboard }: { toggleDashboard: () => void }) => {
    return (
        <div>
            <img className="mx-auto mt-[45px] mb-[48px]" src={logo} alt="logo simon pay" />
            <img className="absolute top-0 left-[130px] z-0" src={vector1} />
            <img className="absolute right-[233.88px] bottom-[111.11px]" src={vector2} />
            <div className="w-[1320px] h-[800px] flex bg-white rounded-2xl p-4 relative">
                <section className="w-1/2 mr-4 relative">
                    <img src={peaje} alt="imagen de un peaje" />
                    <img className="absolute bottom-10 right-0" src={vector3} />
                    <img
                        className="absolute bottom-10 left-10"
                        src={sello}
                        alt="logo optimiza tu movilidad simon"
                    />
                </section>
                <section className="w-1/2 flex justify-center items-center text-center">
                    <div className="w-[380px] h-[392px]">
                        <h1 className="text-[48px] font-bold leading-[57.6px] mb-8">
                            Iniciar sesion
                        </h1>
                        <p className="text-[20px] mb-8">
                            Bienvenido, digita tus credenciales para acceder a la plataforma.
                        </p>
                        <form className="flex flex-col items-start">
                            <label htmlFor="userInput" className="text-sm mb-1.5">
                                Usuario
                            </label>
                            <input
                                className="outline-none border mb-4 focus:border-[#00F1C7] hover:border-[#00F1C7] w-[380px] h-10 border-[#D9D9D9] rounded-lg"
                                id="userInput"
                                type="text"
                            />
                            <label htmlFor="passwordInput" className="text-sm mb-1.5">
                                Usuario
                            </label>
                            <input
                                className="outline-none border mb-10 focus:border-[#00F1C7] hover:border-[#00F1C7] w-[380px] h-10 border-[#D9D9D9] rounded-lg"
                                id="passwordInput"
                                type="password"
                            />
                            <button
                                type="button"
                                onClick={toggleDashboard}
                                className="w-[380px] duration-300 transition-colors ease-in-out hover:text-white h-10 hover:bg-[#59a397] bg-[#00F1C7] font-bold cursor-pointer rounded-lg">
                                Iniciar sesión
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
