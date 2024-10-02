import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    item: string[];
}

const Header: FC<Props> = ({ item }) => {

    const headerItem = item?.map((li: string, inx: number) => (
        <li key={inx}>
            <a href="" className="hover:text-yellow-400 transition duration-300 ease-in-out">
                {li}
            </a>
        </li>
        ))

    return (
        <header className="text-black">
            <nav className="container mx-auto p-6 flex justify-between items-center">
                <div className="text-3xl font-bold text-yellow-600">
                    <Link to={"/"}>
                        Main
                    </Link>
                </div>
                
                <ul className="hidden md:flex space-x-8 text-lg font-semibold">
                    {headerItem}
                </ul>
                <div className="md:hidden text-white text-3xl cursor-pointer">
                    <i className="fas fa-bars"></i>
                </div>
            </nav>

            <ul className="md:hidden bg-gray-900 text-white p-4 space-y-4 shadow-md">
                {headerItem}
            </ul>
        </header>
    );
};

export default Header;