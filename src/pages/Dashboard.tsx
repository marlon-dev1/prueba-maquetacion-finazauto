import logo from '../assets/logos/simon-pay.svg';
import setting from '../assets/logos/setting.svg';
import notification from '../assets/logos/notification.svg';

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
                        <div className="w-12 h-12 rounded-[10px]"></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Dashboard;
