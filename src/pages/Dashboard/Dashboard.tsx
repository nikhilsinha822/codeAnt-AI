import plus from '../../assets/icons/plus.png'
import refresh from '../../assets/icons/refresh.png'
import search from '../../assets/icons/search.png'
import Icon from '../../component/Icon';
import repositories from '../../data/repositories';
import Navigation from './components/Navigation'
import LanguageDot from './components/LanguageDot';
import database from '../../assets/icons/database.png'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <div className="lg:ml-64">
                <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                        <div>
                            <h1 className="text-xl font-semibold mb-1">Repositories</h1>
                            <p className="text-sm text-gray-500">{repositories.length} total repositories</p>
                        </div>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                            <button className="flex items-center gap-1.5 border text-gray-600 hover:bg-gray-50 px-4 py-2 rounded">
                                <Icon src={refresh} size='sm' className='p-0.75' />
                                <span className="text-sm">Refresh All</span>
                            </button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white flex gap-1.5 items-center px-4 py-2 rounded-md text-sm">
                                <Icon src={plus} size='sm' className='p-0.75' />
                                Add Repository
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <Icon
                            src={search}
                            size='sm'
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search Repositories"
                            className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Repository List */}
                    <div className="space-y-4">
                        {repositories.map((repo) => (
                            <div key={repo.name} className="border hover:border-gray-300 rounded-md p-4 transition-colors cursor-pointer">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-blue-600 hover:underline">
                                            {repo.name}
                                        </span>
                                        <span className={`text-xs px-2 py-0.5 border border-blue-400 rounded-xl bg-blue-50 text-blue-600`}>
                                            {repo.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <LanguageDot language={repo.language} />
                                    <div className="flex items-center text-xs text-gray-500">
                                        <Icon src={database} className='w-2 p-2' />
                                        {repo.size}
                                    </div>
                                    <span className="text-sm text-gray-500">{repo.updatedAt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;