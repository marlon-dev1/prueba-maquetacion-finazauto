import logo from '../assets/logos/simon-pay.svg';
import setting from '../assets/logos/setting.svg';
import notification from '../assets/logos/notification.svg';
import user from '../assets/logos/user.svg';
import car from '../assets/images/car.png';
import document from '../assets/logos/document.svg';
import check from '../assets/logos/check.svg';
import vector4 from '../assets/logos/vector4.svg';

const Dashboard = () => {
    return (
        <div className="w-[1520px]">
            <header className="h-12 mt-[30px] mb-12 flex justify-between">
                <img src={logo} alt="logo simon pay" />
                <div className="w-[968px] h-10 flex">
                    <div className="w-[783.28px] mr-5 cursor-pointer flex p-1 justify-between border border-[#3D3D3D] bg-[#1B1B1B] rounded-lg">
                        <p className="px-3 leading-5 py-1.5 text-black bg-[#00F1C7] rounded-sm">
                            Inicio
                        </p>
                        <p className="px-3 rounded-sm leading-5 py-1.5 text-[#999999]">
                            Amigos Simon
                        </p>
                        <p className="px-3 rounded-sm leading-5 py-1.5 text-[#999999]">
                            Simon te presta
                        </p>
                        <p className="px-3 rounded-sm leading-5 py-1.5 text-[#999999]">
                            Simon te cuida
                        </p>
                        <p className="px-3 rounded-sm leading-5 py-1.5 text-[#999999]">
                            Simon te premia
                        </p>
                        <p className="px-3 rounded-sm leading-5 py-1.5 text-[#999999]">
                            Simon te cuenta
                        </p>
                    </div>
                    <div className="w-[164px] flex cursor-pointer">
                        <div className="w-12 h-12 rounded-[10px] flex justify-center items-center bg-[#1B1B1B] mr-2.5">
                            <img src={setting} alt="logo ajustes" />
                        </div>
                        <div className="w-12 h-12 rounded-[10px] flex justify-center items-center bg-[#1B1B1B] mr-2.5">
                            <img src={notification} alt="logo notificaciones" />
                        </div>
                        <div className="w-12 h-12 rounded-[10px]">
                            <img src={user} alt="imagen del usuario" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex justify-between items-center mb-[30px]">
                <div className="text-white">
                    <h1 className="text-5xl mb-5">Centro de control</h1>
                    <p className="text-sm">Esto es lo que tenemos para ti el día de hoy.</p>
                </div>
                <button
                    type="button"
                    className="w-[164px] duration-300 transition-colors ease-in-out hover:text-white h-10 hover:bg-[#59a397] bg-[#00F1C7] font-bold cursor-pointer rounded-lg">
                    Recargar saldo
                </button>
            </div>
            <section className="mb-9 flex">
                <div className="mr-4">
                    <div className="w-[1136px] p-5 h-[464px] mb-4 bg-[#1B1B1B] rounded-[10px] border border-[#3D3D3D] relative">
                        <img className="absolute right-6 top-0" src={vector4} />
                        <div className="flex relative">
                            <div className="w-[368px] h-[361px] bg-[#2C2C2C] rounded-[10px] p-[30px]">
                                <p className="flex justify-between text-white text-2xl mb-[30px]">
                                    Tus vehiculos <span>3</span>
                                </p>
                                <div className="mb-[22px]">
                                    <div className="border-l-4 flex justify-between items-center border-l-[#00F1C7] h-14 mb-1.5 bg-[#232323] rounded-sm px-4">
                                        <p className="text-[#00F1C7] text-2xl flex items-center">
                                            ABC 123
                                            <span className="bg-[#2C2C2C] text-[10px] ml-2.5 py-1.5 px-2">
                                                ACTIVO
                                            </span>
                                        </p>
                                        <div className="rounded-full w-4 h-4 bg-[#00F1C7]" />
                                    </div>
                                    <div className="h-14 border-l-4 mb-1.5 flex border-l-[#999999] justify-between items-center bg-[#232323] rounded-sm p-4">
                                        <p className="text-[#999999] text-2xl flex items-center ">
                                            ABC 123
                                            <span className="bg-[#2C2C2C] text-[10px] ml-2.5 py-1.5 px-2">
                                                ACTIVO
                                            </span>
                                        </p>
                                        <div className="rounded-full w-4 h-4 bg-[#999999]" />
                                    </div>
                                    <div className="border-l-4 h-14 flex border-l-[#999999] justify-between items-center bg-[#232323] rounded-sm p-4">
                                        <p className="text-[#999999] text-2xl flex items-center">
                                            ABC 123
                                            <span className="bg-[#2C2C2C] text-[10px] ml-2.5 py-1.5 px-2">
                                                ACTIVO
                                            </span>
                                        </p>
                                        <div className="rounded-full w-4 h-4 bg-[#999999]" />
                                    </div>
                                </div>
                            </div>
                            <img
                                className="mx-auto"
                                src={car}
                                alt="imagen de un carro chevrolect color azul"
                            />
                        </div>
                        <div className="mt-[23px] flex justify-between">
                            <div className="flex">
                                <div className="flex">
                                    <div className="h-10 w-10 mr-3 bg-[#2C2C2C] flex justify-center items-center rounded-lg">
                                        <img src={document} alt="logo de un documento" />
                                    </div>
                                    <p className="text-xs text-[#999999] flex flex-col">
                                        Placa
                                        <span className="text-sm text-white">ABC 123</span>
                                    </p>
                                </div>
                                <div className="w-[1px] h-10 bg-[#2C2C2C] mx-6" />
                                <div className="flex">
                                    <div className="h-10 w-10 mr-3 bg-[#2C2C2C] flex justify-center items-center rounded-lg">
                                        <img src={document} alt="logo de un documento" />
                                    </div>
                                    <p className="text-xs text-[#999999] flex flex-col">
                                        Marca
                                        <span className="text-sm text-white">CHEVROLET</span>
                                    </p>
                                </div>
                                <div className="w-[1px] h-10 bg-[#2C2C2C] mx-6" />
                                <div className="flex">
                                    <div className="h-10 w-10 mr-3 bg-[#2C2C2C] flex justify-center items-center rounded-lg">
                                        <img src={document} alt="logo de un documento" />
                                    </div>
                                    <p className="text-xs text-[#999999] flex flex-col">
                                        Modelo
                                        <span className="text-sm text-white">2020</span>
                                    </p>
                                </div>
                                <div className="w-[1px] h-10 bg-[#2C2C2C] mx-6" />
                                <div className="flex">
                                    <div className="h-10 w-10 mr-3 bg-[#2C2C2C] flex justify-center items-center rounded-lg">
                                        <img src={document} alt="logo de un documento" />
                                    </div>
                                    <p className="text-xs text-[#999999] flex flex-col">
                                        Línea
                                        <span className="text-sm text-white">SPARK GT ACTIV</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="h-10 w-10 mr-3 bg-[#2C2C2C] flex justify-center items-center rounded-lg">
                                    <img src={check} alt="logo de un documento" />
                                </div>
                                <p className="text-xs text-[#999999] flex flex-col">
                                    Estado
                                    <span className="text-sm text-[#00F1C7]">ACTIVO</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[368px] h-[340px] mr-4 bg-[#1B1B1B] rounded-[10px] border border-[#3D3D3D]"></div>
                        <div className="w-[752px] h-[340px] bg-[#1B1B1B] rounded-[10px] border border-[#3D3D3D]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-end mb-4 w-[368px] h-[146px] bg-[#1B1B1B] rounded-[10px] border border-[#3D3D3D] pt-[30px] pr-[30px] pb-5">
                        <p className="text-white">Tu saldo disponible</p>
                        <p className="text-[#00F1C7] text-[64px] leading-[76.8px]">$50.000</p>
                    </div>
                    <div className="w-[368px] h-[658px] bg-[#1B1B1B] rounded-[10px] border border-[#3D3D3D]"></div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
