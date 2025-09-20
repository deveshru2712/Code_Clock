import { DefaultMultipleBarChart } from "@/components/main/Bento/Chart";
import InstallOnVsCode from "@/components/main/Bento/InstallOnVsCode";
import LanguageDistribution from "@/components/main/Bento/LanguageDistribution";
import Leaderboard from "@/components/main/Bento/LeaderBoard";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex flex-col items-center justify-center pt-28">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <DefaultMultipleBarChart />
            <InstallOnVsCode />
          </div>

          <div className="flex flex-col gap-4">
            <Leaderboard />
            <LanguageDistribution />
          </div>
        </div>
      </div>
    </div>
  );
}
