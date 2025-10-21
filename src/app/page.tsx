import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AirQualityCard from '../components/AirQualityCard';
import HandHygieneCard from '../components/HandHygieneCard';
import Alerts from '../components/Alerts';

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hospital Overview</h2>
            </div>
            <AirQualityCard />
            <HandHygieneCard />
            <div className="md:col-span-2 lg:col-span-3">
              <Alerts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}