import { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import github from '../../assets/icons/github.png'
import azureDevops from '../../assets/icons/azureDevops.png'
import gitlab from '../../assets/icons/gitlab.png'
import sso from '../../assets/icons/sso.png'
import bitbuket from '../../assets/icons/bitbuket.png'
import Subtract from '../../assets/images/Subtract.png'
import authSideImage from '../../assets/images/auth_side_image.png'
import Icon from '../../component/Icon'
import Button from './components/Button'

const saasIcons = [
    {
        icon: github,
        name: 'GitHub',
        text: 'Sign in with GitHub'
    },
    {
        icon: azureDevops,
        name: 'Azure DevOps',
        text: 'Sign in with Azure DevOps'
    },
    {
        icon: gitlab,
        name: 'GitLab',
        text: 'Sign in with GitLab'
    },
    {
        icon: bitbuket,
        name: 'Bitbusket',
        text: 'Sign in with Bitbusket'
    }
]

const selfHostedIcons = [
    {
        icon: sso,
        name: 'SSO',
        text: 'Sign in with SSO'
    },
    {
        icon: gitlab,
        name: 'GitLab',
        text: 'Self Hosted GitLab'
    },
]

const SignIn = () => {
    const [activeTab, setActiveTab] = useState('SAAS');

    return (
        <div className="relative flex justify-center items-center bg-gray-50 h-screen overflow-hidden">
            <div className="hidden lg:flex lg:w-1/2 bg-white border-r justify-center items-center h-screen fixed left-0">
                <img 
                    src={authSideImage} 
                    alt="Decorative" 
                    className="w-3/5 object-contain" 
                />
            </div>

            <img 
                src={Subtract} 
                alt="Decorative" 
                className="hidden lg:block absolute left-0 bottom-0 w-40" 
            />

            <div className="w-full lg:w-1/2 min-h-screen flex items-center lg:ml-[50%]">
                <div className="w-full max-w-md mx-auto px-4 py-8 lg:px-0">
                    <div className="bg-white rounded-md shadow-sm">
                        <div className="border border-b-0 rounded-t-md p-8">
                            <div className="flex flex-col items-center gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <Icon src={Logo} alt="CodeAnt AI" size="lg" />
                                </div>
                                <h1 className="text-2xl font-semibold text-center">
                                    Welcome to CodeAnt AI
                                </h1>
                            </div>

                            <div className="flex">
                                <button
                                    onClick={() => setActiveTab('SAAS')}
                                    className={`flex-1 py-2.5 px-4 rounded-md 
                                       border-r-0 rounded-r-none transition-colors ${
                                        activeTab === 'SAAS'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-700 border hover:bg-gray-50'
                                    }`}
                                >
                                    SAAS
                                </button>
                                <button
                                    onClick={() => setActiveTab('Self Hosted')}
                                    className={`flex-1 py-2.5 px-4 rounded-md 
                                        border-l-0 rounded-l-none transition-colors ${
                                        activeTab === 'Self Hosted'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-700 border hover:bg-gray-50'
                                    }`}
                                >
                                    Self Hosted
                                </button>
                            </div>
                        </div>

                        <div className="border border-t-0 rounded-b-md p-6 space-y-4 min-h-[296px]">
                            {activeTab === 'SAAS' 
                                ? saasIcons.map((item) => (
                                    <Button key={item.name} item={item} />
                                ))
                                : selfHostedIcons.map((item) => (
                                    <Button key={item.name} item={item} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="text-center text-sm text-gray-600 mt-8">
                        By signing up you agree to the{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </a>
                        .
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn