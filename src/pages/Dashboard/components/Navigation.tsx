import Icon from '../../../component/Icon'
import book from '../../../assets/icons/book.png'
import cloud from '../../../assets/icons/cloud.png'
import code from '../../../assets/icons/code.png'
import gear from '../../../assets/icons/gear.png'
import Home from '../../../assets/icons/home.png'
import logout from '../../../assets/icons/logout.png'
import phone from '../../../assets/icons/phone.png'
import chevronDown from '../../../assets/icons/chevron-down.png'
import cross from '../../../assets/icons/cross.png'
import hamburger from '../../../assets/icons/hamburger.png'
import logo from '../../../assets/images/logo.png'
import { useState } from 'react';

const navigationItems = [
    { name: 'Repositories', icon: Home, active: true },
    { name: 'AI Code Review', icon: code, active: false },
    { name: 'Cloud Security', icon: cloud, active: false },
    { name: 'How to Use', icon: book, active: false },
    { name: 'Settings', icon: gear, active: false },
];

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="hidden lg:flex fixed left-0 w-64 top-0 h-full border-r">
                <div className="w-full">
                    <div className="p-4 border-b">
                        <div className="flex flex-col w-full justify-start">
                            <div className="flex items-center justify-start gap-2">
                                <Icon src={logo} size='md' />
                                <span className="text-xl">CodeAnt AI</span>
                            </div>
                            <div className="flex items-center gap-1 border rounded-md p-2 mt-4 text-gray-600 cursor-pointer">
                                <span className="text-sm  truncate">Long name Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maiores. Quasi, sit quos. Soluta ipsum, aut modi iure provident quidem minima amet omnis nemo est architecto rem beatae molestiae minus.</span>
                                <Icon src={chevronDown} className='w-3 p-2' />
                            </div>
                        </div>
                    </div>

                    <nav className="p-2">
                        {navigationItems.map((item) => (
                            <div
                                key={item.name}
                                className={`px-3 py-2 flex gap-2 items-center rounded-md mb-1 cursor-pointer ${item.active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <Icon src={item.icon} className='w-5 p-0.5' />
                                {item.name}
                            </div>
                        ))}
                    </nav>

                    <div className="absolute bottom-0 w-full p-2">
                        <div className="px-3 py-2 flex gap-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md">
                            <Icon src={phone} size='md' className='p-0.5' />
                            Support
                        </div>
                        <div className="px-3 py-2 flex gap-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md">
                            <Icon src={logout} size='md' className='p-0.5' />
                            Logout
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden border-b">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <Icon src={logo} size='md' />
                        <span className="font-medium">CodeAnt AI</span>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(true)}>
                        <Icon src={hamburger} size='md' />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-white z-50 max-h-fit">
                    <div className="p-4 flex items-center justify-between border-b">
                        <div className="flex items-center gap-2">
                            <Icon src={logo} size='md' />
                            <span className="font-medium">CodeAnt AI</span>
                        </div>
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <Icon src={cross} size='md' />
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-1 text-gray-600 mb-4 border p-2 rounded-md">
                            <span className="text-sm  truncate">Long name Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maiores. Quasi, sit quos. Soluta ipsum, aut modi iure provident quidem minima amet omnis nemo est architecto rem beatae molestiae minus.</span>
                            <Icon src={chevronDown} className='w-3 p-2' />
                        </div>
                        {navigationItems.map((item) => (
                            <div
                                key={item.name}
                                className={`px-3 py-2 flex gap-2 rounded-md mb-1 ${item.active ? 'bg-blue-600 text-white' : 'text-gray-700'
                                    }`}
                            >
                                <Icon src={item.icon} className='w-5' />
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Navigation